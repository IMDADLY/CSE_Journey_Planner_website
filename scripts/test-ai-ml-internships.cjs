// Local software checks; no student assessment or completion inspection.
const assert = require('node:assert/strict');
const path = require('node:path');
const Module = require('node:module');
const babel = require('@babel/core');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const file = path.resolve(__dirname, '../frontend/components/InternshipOpportunities.js');
const component = new Module(file, module);
component.filename = file;
component.paths = module.paths;
component._compile(babel.transformFileSync(file, {presets:['@babel/preset-env','@babel/preset-react']}).code, file);
const {currentOpportunities, opportunityExpiry, default: Opportunities} = component.exports;
const verified = Date.parse('2026-10-27T12:35:27Z');
const week = 7 * 24 * 60 * 60 * 1000;
const role = {verifiedAt:new Date(verified).toISOString(), visibleUntil:new Date(verified+week).toISOString(), deadline:'Not stated'};
assert.equal(currentOpportunities([role], verified).length, 1);
assert.equal(currentOpportunities([role], verified+week-1).length, 1);
assert.equal(currentOpportunities([role], verified+week).length, 0);
assert.equal(currentOpportunities([role], verified-1).length, 0);
assert.equal(currentOpportunities([{...role, visibleUntil:new Date(verified+2*week).toISOString()}], verified+week).length, 0, 'Cached data cannot extend seven-day validity');
const deadlineRole = {...role, deadline:new Date(verified+1000).toISOString()};
assert.equal(opportunityExpiry(deadlineRole), verified+1000);
assert.equal(currentOpportunities([deadlineRole], verified+1000).length, 0);
for (const field of ['verifiedAt','visibleUntil','deadline']) {
    assert.equal(currentOpportunities([{...role,[field]:'invalid'}],verified).length,0, field);
}
const empty = renderToStaticMarkup(React.createElement(Opportunities, {opportunities:[]}));
assert.match(empty,/Internship opportunities/);
assert.doesNotMatch(empty,/<article|No opportunities|No matches/);
const now = Date.now();
const displayRole = {...role, verifiedAt:new Date(now-1000).toISOString(), visibleUntil:new Date(now+10000).toISOString(),
    id:'fixture', role:'Fixture internship', employer:'Example employer', location:'India', workMode:'Remote',
    eligibility:'Undergraduate', compensation:'Not stated', duration:'Not stated',
    sourceUrl:'https://example.org/role', applicationUrl:'https://example.org/role', applicationInstructions:'Follow the official instructions.',
    preparationSemester:3, relatedMaterial:[{requirement:'Python',alignment:'Curriculum alignment only.',
        course:{title:'Existing course',url:'https://example.org/course'},assignmentTopicId:'AML-01',assignmentTitle:'Selected exercise',assignmentSemester:3}]};
const markup = renderToStaticMarkup(React.createElement(Opportunities,{opportunities:[displayRole]}));
assert.match(markup,/href="#assignment-AML-01"/);
assert.match(markup,/Assignment completion and proficiency are not checked/);
assert.match(markup,/href="https:\/\/example.org\/role"/);
console.log('AI/ML internship frontend checks passed: expiry, cached data, empty section and related links.');
