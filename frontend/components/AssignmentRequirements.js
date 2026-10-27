import React from 'react';

const Items = ({items}) => <ul>{items.map((item,i)=><li key={i}>{item}</li>)}</ul>;

export default function AssignmentRequirements({document: doc}) {
    return <details className="aiml-assignment" id={`assignment-${doc.subtopicId}`}>
        <summary><span><strong>Individual assignment: {doc.title}</strong><small>{doc.estimatedHours} hours · {doc.duration} · {doc.sourceType}</small></span><span className="aiml-assignment-toggle" aria-hidden="true">Requirements ↓</span></summary>
        <div className="aiml-assignment-body">
            <h3>Assignment requirements</h3>
            <p><strong>Source:</strong> {doc.sourceType}. {doc.sourceType==='Original course-aligned exercise'&&'This exercise was authored for the roadmap; it is not an official course assignment.'}</p>
            <h4>Courses and assignment material</h4>
            <p><a href={doc.course.url} target="_blank" rel="noopener noreferrer">{doc.course.title} ↗</a><br/><small>{doc.course.provider}</small></p>
            <p><strong>Relevant course coverage:</strong> {doc.course.selectedCoverage}</p>
            {doc.source&&<p><a href={doc.source.url} target="_blank" rel="noopener noreferrer">{doc.source.title} ↗</a><br/><small>{doc.source.access} Link checked {doc.source.verifiedOn}.</small></p>}
            <h4>Goals</h4><Items items={doc.goals}/>
            <h4>Study before starting</h4><Items items={doc.prerequisites}/>
            <h4>Tech stack and setup</h4><Items items={doc.techStack}/><p>{doc.setup}</p>
            <p><strong>Starter code:</strong> {doc.starterCode}</p>
            <h4>Required tasks, inputs and outputs</h4><Items items={doc.requirements}/>
            <p><strong>Scope:</strong> {doc.scope}</p>
            <h4>Acceptance criteria</h4><Items items={doc.acceptanceCriteria}/>
            <h4>Timeline · {doc.estimatedHours} hours total</h4>
            <ol>{doc.timeline.map(step=><li key={step.phase}>{step.phase} — {step.hours} {step.hours===1?'hour':'hours'}</li>)}</ol>
            <h4>What to submit</h4><Items items={doc.submission}/>
            <h4>Proof of learning</h4><Items items={doc.proofOfLearning}/>
            <h4>Independent-work rules</h4><p>{doc.independentWork}</p>
        </div>
    </details>;
}
