import React, {useEffect, useState} from 'react';

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export function opportunityExpiry(opportunity) {
    const verified = Date.parse(opportunity.verifiedAt);
    const visibleUntil = Date.parse(opportunity.visibleUntil);
    if (!Number.isFinite(verified) || !Number.isFinite(visibleUntil)) return NaN;
    let expiry = Math.min(verified + WEEK_MS, visibleUntil);
    if (opportunity.deadline && opportunity.deadline !== 'Not stated') {
        const deadline = Date.parse(opportunity.deadline);
        if (!Number.isFinite(deadline)) return NaN;
        expiry = Math.min(expiry, deadline);
    }
    return expiry;
}

export function currentOpportunities(opportunities = [], now = Date.now()) {
    return opportunities.filter(item => Date.parse(item.verifiedAt) <= now && now < opportunityExpiry(item));
}

function openAssignment(topicId) {
    const target = document.getElementById(`assignment-${topicId}`);
    if (target) target.open = true;
}

export default function InternshipOpportunities({opportunities = []}) {
    const [now, setNow] = useState(Date.now);
    useEffect(() => {
        const refresh = () => setNow(Date.now());
        const remaining = currentOpportunities(opportunities, now).map(item => opportunityExpiry(item) - Date.now());
        const timer = remaining.length ? setTimeout(refresh, Math.min(2147483647, Math.max(1, Math.min(...remaining)))) : null;
        window.addEventListener('focus', refresh);
        document.addEventListener('visibilitychange', refresh);
        return () => {
            if (timer !== null) clearTimeout(timer);
            window.removeEventListener('focus', refresh);
            document.removeEventListener('visibilitychange', refresh);
        };
    }, [opportunities, now]);
    const visible = currentOpportunities(opportunities, Math.max(now, Date.now()));
    return <section className="aiml-panel aiml-internships" aria-labelledby="aiml-internships-title">
        <h2 id="aiml-internships-title">Internship opportunities</h2>
        {visible.map(item => <article className="aiml-internship" key={item.id}>
            <h3>{item.role}</h3>
            <p className="aiml-internship-employer">{item.employer} · {item.location} · {item.workMode}</p>
            <dl className="aiml-internship-facts">
                <div><dt>Eligibility</dt><dd>{item.eligibility}</dd></div>
                <div><dt>Compensation</dt><dd>{item.compensation}</dd></div>
                <div><dt>Duration</dt><dd>{item.duration}</dd></div>
                <div><dt>Application deadline</dt><dd>{item.deadline === 'Not stated' ? item.deadline : new Date(item.deadline).toLocaleString()}</dd></div>
            </dl>
            <p><a href={item.applicationUrl} target="_blank" rel="noopener noreferrer">View role and application instructions ↗</a></p>
            <p>{item.applicationInstructions}</p>
            <small>Verified {new Date(item.verifiedAt).toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Kolkata'})} · <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Official source ↗</a></small>
            <details className="aiml-internship-material">
                <summary>Related roadmap material · through Semester {item.preparationSemester}</summary>
                <p>These links show planned curriculum coverage. Assignment completion and proficiency are not checked.</p>
                <ul>{item.relatedMaterial.map((material, i) => <li key={i}>
                    <strong>{material.requirement}</strong><br/>
                    <a href={material.course.url} target="_blank" rel="noopener noreferrer">{material.course.title} ↗</a>
                    {' · '}<a href={`#assignment-${material.assignmentTopicId}`} onClick={() => openAssignment(material.assignmentTopicId)}>{material.assignmentTitle} (Semester {material.assignmentSemester})</a>
                    <p>{material.alignment}</p>
                </li>)}</ul>
            </details>
        </article>)}
    </section>;
}
