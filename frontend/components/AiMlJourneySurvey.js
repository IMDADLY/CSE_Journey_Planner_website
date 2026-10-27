import InternshipOpportunities from './InternshipOpportunities';
import AssignmentRequirements from './AssignmentRequirements';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GROUP_NAMES = [
    'Code, data & mathematics',
    'Reasoning & preparation',
    'Models & reliable evaluation',
    'Deep learning & generative AI',
    'Applied AI methods',
    'Engineering & research practice',
    'Your practice experience'
];

function readDraft(version, key) {
    try {
        const draft = JSON.parse(localStorage.getItem(key) || '{}');
        return draft.version === version ? draft : {};
    } catch (_) { return {}; }
}

function CodeText({ text }) {
    const parts = String(text || '').split(/(`[^`]+`)/g);
    return <>{parts.map((part, i) => part.startsWith('`') && part.endsWith('`') ?
        (part.length > 68 || part.includes(';') ?
            <pre className="aiml-code" key={i}><code><HighlightedCode code={part.slice(1, -1).replaceAll('; ', ';\n')}/></code></pre> :
            <code className="aiml-inline-code" key={i}>{part.slice(1, -1)}</code>) :
        <React.Fragment key={i}>{part}</React.Fragment>)}</>;
}

function HighlightedCode({code}) {
    const words=String(code).split(/(\b(?:def|return|for|in|if|else|SELECT|FROM|WHERE|GROUP|BY|ORDER|OVER|PARTITION|True|False|None)\b|\b\d+(?:\.\d+)?\b|"[^"]*"|'[^']*')/g);
    return <>{words.map((word,i)=>{
        const kind=/^(?:def|return|for|in|if|else|SELECT|FROM|WHERE|GROUP|BY|ORDER|OVER|PARTITION|True|False|None)$/.test(word)?'keyword':
            /^(?:\d|"|')/.test(word)?'literal':'';
        return kind?<span className={`aiml-syntax-${kind}`} key={i}>{word}</span>:<React.Fragment key={i}>{word}</React.Fragment>;
    })}</>;
}

function Report({ result, topics, specializationName, onNewSurvey }) {
    const [view, setView] = useState('roadmap');
    const weak = [...result.subtopics].sort((a,b) => a.score-b.score).slice(0,5);
    const topicById=Object.fromEntries(topics.map(t=>[t.id,t]));
    return <main className="aiml-wrap aiml-report">
        <div className="aiml-hero aiml-report-hero">
            <span className="aiml-eyebrow">Your {specializationName} journey · Semester {result.currentSemester}</span>
            <h1>Your next steps are ready.</h1>
            <p>The roadmap starts with the areas where your survey showed the most need for practice. Scores are learning signals, not proof of job readiness.</p>
            <div className="aiml-summary-grid">
                <div><strong>{result.overallTechnicalScore}%</strong><span>Technical survey score</span></div>
                <div><strong>{result.practiceScore}%</strong><span>Self-reported practice</span></div>
                <div><strong>{topics.length}</strong><span>Subtopics mapped</span></div>
            </div>
        </div>
        <nav className="aiml-tabs" aria-label="Survey results">
            <button className={view==='roadmap'?'active':''} onClick={()=>setView('roadmap')}>Your roadmap</button>
            <button className={view==='skills'?'active':''} onClick={()=>setView('skills')}>Skill report</button>
            <button className={view==='review'?'active':''} onClick={()=>setView('review')}>Answer review</button>
        </nav>
        {view==='roadmap' && <>
            <section className="aiml-panel"><h2>Start here</h2><p>Your five lowest scoring subtopics are the first areas to review. Follow prerequisite units before dependent units.</p><div className="aiml-chips">{weak.map(t=><span key={t.id}>{t.name} · {t.score}%</span>)}</div></section>
            <p className="aiml-disclaimer">{result.roadmap.note}</p>
            {result.roadmap.semesters.map(plan=><section className="aiml-panel aiml-semester-plan" key={plan.semester}>
                <div className="aiml-section-head"><span className="aiml-step">S{plan.semester}</span><div><h2>Semester {plan.semester}</h2><p>{plan.learningUnits.length} focused learning units</p></div></div>
                <div className="aiml-units">{plan.learningUnits.map(unit=><article className="aiml-unit" key={unit.learningUnitId || unit.subtopicId}>
                    <span className="aiml-unit-score">{unit.scoreScope==='parent-area'?'Area survey':'Survey'}: {unit.surveyScore}%</span><h3>{unit.subtopic}</h3>
                    {unit.parentSubtopic&&<small>{unit.parentSubtopic}</small>}
                    {unit.learningGoal&&<p><strong>Goal:</strong> {unit.learningGoal}</p>}
                    {unit.learningUnitId&&<p><strong>Study focus:</strong> {unit.studyFocus}</p>}
                    {unit.estimatedStudyHours&&<p><strong>Selected study:</strong> about {unit.estimatedStudyHours} hours · assignment time is separate</p>}
                    {unit.prerequisites?.length>0&&<p><strong>Study first:</strong> {unit.prerequisites.map(p=>p.title).join('; ')}</p>}
                    <p>{unit.action}</p>
                    {unit.focusItems?.length>0?<div><strong>{unit.reviewScope==='parent-area'?'Review from this broad area:':'Review these concepts:'}</strong><ul>{unit.focusItems.map((focus,i)=><li key={`${focus.concept}-${i}`}>{focus.url?<a href={focus.url} target="_blank" rel="noopener noreferrer">{focus.concept} ↗</a>:focus.concept}</li>)}</ul></div>:
                        unit.missedConcepts?.length>0&&<p><strong>Review:</strong> {unit.missedConcepts.join(', ')}</p>}
                    <a href={unit.course.url} target="_blank" rel="noopener noreferrer">Study: {unit.course.title} ↗</a><small>{unit.course.provider} · Focus on the relevant modules</small>
                    {unit.learningUnitId&&unit.course.selectedCoverage!==unit.studyFocus&&<p><strong>Course modules:</strong> {unit.course.selectedCoverage}</p>}
                    {unit.course.access&&<small>{unit.course.access}</small>}
                    {unit.additionalResources?.length>0&&<p>More resources: {unit.additionalResources.map((resource,i)=><React.Fragment key={resource.url}>{i>0?' · ':''}<a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title} ↗</a></React.Fragment>)}</p>}
                    {unit.exitEvidence&&<p><strong>Show your work:</strong> {unit.exitEvidence}</p>}
                </article>)}</div>
                {plan.projectRequirements&&<AssignmentRequirements document={plan.projectRequirements}/>}
                <div className="aiml-deliverables"><strong>Build and prepare</strong><ul>{plan.deliverables.map((item,i)=><li key={i}>{item}</li>)}</ul></div>
            </section>)}
            {result.roadmap.internshipOpportunities&&<InternshipOpportunities opportunities={result.roadmap.internshipOpportunities}/>}
        </>}
        {view==='skills' && <section className="aiml-panel"><h2>Your subtopic evidence</h2><p>Scores summarize the technical MCQs in each subtopic. Use the concept details in Answer review to decide what to practise.</p>
            <div className="aiml-skill-list">{result.subtopics.map(t=><div className="aiml-skill" key={t.id}>
                <div><strong>{t.name}</strong><span>{t.correct}/{t.total} correct · {t.unanswered} unanswered{t.evidence==='limited'?' · limited evidence':''}</span></div><b>{t.score}%</b>
                <div className="aiml-skill-track"><span style={{width:`${t.score}%`}}/></div>
            </div>)}</div></section>}
        {view==='review' && <section className="aiml-panel"><h2>Answer review</h2><p>Review the concepts behind missed or unfamiliar items. Question keys were withheld until submission.</p>
            {result.review.map(item=><details className="aiml-review-item" key={item.id}>
                <summary><span>{item.id} · {topicById[item.subtopicId]?.name} · {item.concept}</span><strong>{item.status==='unanswered'?'Unanswered':item.correct?'Correct':'Review'}</strong></summary>
                <p><strong>Question:</strong> <CodeText text={item.stem}/></p>
                {item.selectedOptionText&&<p><strong>Your answer:</strong> <CodeText text={item.selectedOptionText}/></p>}
                <p><strong>Correct answer:</strong> <CodeText text={item.correctOptionText}/></p>
                <p><strong>Why:</strong> {item.explanation}</p>
            </details>)}
        </section>}
        <button className="aiml-secondary" onClick={onNewSurvey}>Start a new survey</button>
    </main>;
}

export default function AiMlJourneySurvey({ specializationId='ai-ml', specializationName='AI/ML' }) {
    const navigate=useNavigate();
    const draftKey=`cse-journey:${specializationId}:common-survey:v2`;
    const resultKey=`cse-journey:${specializationId}:common-result:v2`;
    const apiBase=specializationId==='ai-ml'?'/api/ai-ml/survey':`/api/specializations/${specializationId}/survey`;
    const [params]=useSearchParams();
    const querySemester=Number(params.get('semester') || params.get('sem'));
    const [semester,setSemester]=useState(querySemester>=1&&querySemester<=8?querySemester:1);
    const [form,setForm]=useState(null);
    const [answers,setAnswers]=useState({});
    const [section,setSection]=useState(0);
    const [result,setResult]=useState(null);
    const [loading,setLoading]=useState(true);
    const [submitting,setSubmitting]=useState(false);
    const [error,setError]=useState('');
    const [notice,setNotice]=useState('');

    useEffect(()=>{
        let live=true;
        fetch(apiBase).then(async response=>{
            if (!response.ok) throw new Error('This specialization survey is temporarily unavailable. Please try again later.');
            return response.json();
        }).then(data=>{
            if(!live)return;
            const saved=readDraft(data.version,draftKey);
            setForm(data);setAnswers(saved.answers || {});
            if(saved.semester>=1&&saved.semester<=8)setSemester(saved.semester);
            if(saved.section>=0)setSection(saved.section);
            try {const prior=JSON.parse(localStorage.getItem(resultKey) || 'null');if(prior?.version===data.version && (!data.roadmapContentVersion || prior.result?.roadmap?.contentVersion===data.roadmapContentVersion))setResult(prior.result);else if(prior && data.roadmapContentVersion)setNotice('Your roadmap has been updated. Submit your survey to see the current learning steps, assignments and internships.');}catch(_){}
            setLoading(false);
        }).catch(e=>{if(live){setError(e.message);setLoading(false);}});
        return ()=>{live=false;};
    },[apiBase,draftKey,resultKey]);
    useEffect(()=>{
        if(!form || result)return;
        try {localStorage.setItem(draftKey,JSON.stringify({version:form.version,answers,semester,section}));}
        catch(_){setNotice('Your browser cannot save progress. Keep this tab open until you submit.');}
    },[form,answers,semester,section,result,draftKey]);

    const groups=useMemo(()=>{
        if(!form)return[];
        const sections=[...new Set(form.subtopics.map(t=>t.sectionId))].sort();
        const grouped=sections.map((id,i)=>({name:specializationId==='ai-ml'?GROUP_NAMES[i]:(form.subtopics.find(t=>t.sectionId===id)?.name || id),
            questions:form.questions.filter(q=>q.type==='technical' && form.subtopics.find(t=>t.id===q.subtopicId)?.sectionId===id)}));
        grouped.push({name:'Your practice experience',questions:form.questions.filter(q=>q.type==='self_assessment')});
        return grouped;
    },[form,specializationId]);
    const answered=Object.keys(answers).length;
    const setAnswer=(id,value)=>{setAnswers(prev=>({...prev,[id]:value}));setError('');};
    const move=(next)=>{setSection(next);setError('');window.scrollTo({top:0,behavior:'smooth'});};
    const submit=async()=>{
        setSubmitting(true);setError('');
        try {
            let token=localStorage.getItem('cse-journey:anonymous-token');
            if(!token){token=window.crypto?.randomUUID?.() || String(Date.now());localStorage.setItem('cse-journey:anonymous-token',token);}
            const response=await fetch(`${apiBase}/submit`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({currentSemester:semester,anonymousSessionToken:token,answers})});
            if(!response.ok)throw new Error(`Your survey could not be saved (${response.status}). Please retry; your answers are still here.`);
            const data=await response.json();setResult(data);localStorage.removeItem(draftKey);
            try {localStorage.setItem(resultKey,JSON.stringify({version:form.version,result:data}));}catch(_){}
            window.scrollTo({top:0,behavior:'smooth'});
        }catch(e){setError(e.message);}finally{setSubmitting(false);}
    };
    if(loading)return <main className="aiml-wrap aiml-loading">Loading your {specializationName} journey…</main>;
    if(!form)return <main className="aiml-wrap"><button className="aiml-back" onClick={()=>navigate('/')}>← Specializations</button><h1>Survey unavailable</h1><p role="alert">{error}</p><button className="aiml-primary" onClick={()=>window.location.reload()}>Retry</button></main>;
    const activeSection=Math.min(section,groups.length-1);
    return <div className="aiml-page">
        <header className="aiml-topbar"><div className="aiml-wrap aiml-topbar-inner"><button onClick={()=>navigate('/')}>← Specializations</button><strong>CSE Journey Planner</strong><span>{specializationName}</span></div></header>
        {result?<Report result={result} topics={form.subtopics} specializationName={specializationName} onNewSurvey={()=>{localStorage.removeItem(resultKey);setResult(null);setAnswers({});setSection(0);}}/>:
        <main className="aiml-wrap">
            <div className="aiml-hero"><span className="aiml-eyebrow">Your specialization journey starts here</span><h1>Find your {specializationName} starting point.</h1>
                <p>Explore code, calculations, practical decisions and real engineering scenarios. Take it one section at a time; your progress saves as you go.</p>
                <div className="aiml-intro-row"><label htmlFor="aiml-semester">Current semester <select id="aiml-semester" value={semester} onChange={e=>setSemester(Number(e.target.value))}>{Array.from({length:8},(_,i)=><option value={i+1} key={i}>Semester {i+1}</option>)}</select></label><span>Same survey for every semester · Roadmap tailored to your timing</span></div>
            </div>
            <div className="aiml-progress" role="progressbar" aria-label="Survey completion" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={form.questions.length}>
                <div><strong>{answered} of {form.questions.length}</strong><span>items complete</span></div><div className="aiml-progress-track"><span style={{width:`${Math.round(answered/form.questions.length*100)}%`}}/></div>
            </div>
            {notice&&<p className="aiml-notice" role="status">{notice}</p>}
            <nav className="aiml-section-nav" aria-label="Survey sections">{groups.map((g,i)=>{
                const done=g.questions.filter(q=>answers[q.id]).length;
                return <button type="button" key={i} className={activeSection===i?'active':''} onClick={()=>move(i)} aria-current={activeSection===i?'step':undefined}><b>{i===groups.length-1?'★':String(i+1).padStart(2,'0')}</b><span>{g.name}<small>{done}/{g.questions.length} complete</small></span></button>;
            })}</nav>
            <div className="aiml-section-head"><span className="aiml-step">{activeSection+1} / {groups.length}</span><div><h2>{groups[activeSection].name}</h2><p>{activeSection===groups.length-1?'Share the practical work you can demonstrate. This section is scored separately.':'Choose the best answer. You may leave an item blank; blank items are reported separately.'}</p></div></div>
            <section className="aiml-question-list" aria-label={groups[activeSection].name}>{groups[activeSection].questions.map((q,i)=>{
                const a=answers[q.id];const topic=form.subtopics.find(t=>t.id===q.subtopicId);
                return <article className="aiml-question" key={q.id}>
                    <div className="aiml-question-meta"><span className="aiml-q-number">{String(i+1).padStart(2,'0')}</span><span>{topic?.name}</span><span className="aiml-format">{q.format}</span></div>
                    <h3><CodeText text={q.stem}/></h3>
                    {q.codeSnippet&&<pre className="aiml-code"><code><HighlightedCode code={q.codeSnippet}/></code></pre>}
                    <div className="aiml-options" role="group" aria-label={`Answer for question ${q.id}`}>
                        {q.options.map(o=><label className={`aiml-option ${a?.optionId===o.id?'selected':''}`} key={o.id}>
                            <input type="radio" name={q.id} checked={a?.optionId===o.id} onChange={()=>setAnswer(q.id,{status:'answered',optionId:o.id})}/>
                            <b>{o.label}</b><span><CodeText text={o.text}/></span>
                        </label>)}
                    </div>
                </article>;
            })}</section>
            {error&&<p className="aiml-error" role="alert">{error}</p>}
            <div className="aiml-navigation">{activeSection>0&&<button className="aiml-secondary" onClick={()=>move(activeSection-1)}>← Previous section</button>}{activeSection<groups.length-1?<button className="aiml-primary" onClick={()=>move(activeSection+1)}>Next section →</button>:<button className="aiml-primary" disabled={submitting} onClick={submit}>{submitting?'Building your roadmap…':'See my roadmap →'}</button>}</div>
            <p className="aiml-footnote">Responses are saved in this browser until submission. Unanswered items are reported separately from incorrect answers.</p>
        </main>}
    </div>;
}
