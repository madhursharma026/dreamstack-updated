import Link from 'next/link';
import styles from '../../../styles/Solution/Section5.module.css';

export default function Section5() {

    return (
        <div className={`p-0 px-md-4 px-3`} style={{ background: '#F2F8FF' }}>
            <div className={`${styles.ContainerWidth} py-5`}>
                <h1 className={`${styles.sectionTitle} py-lg-5 py-3 text-center`}><b>So much more than just agency time tracking software</b></h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Approve timesheets</b></h5>
                                <p className="card-text text-muted">Easily review weekly timesheets before making payments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Project management</b></h5>
                                <p className="card-text text-muted">Add clients, projects, and tasks so your team can track time toward the right budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Proof of work</b></h5>
                                <p className="card-text text-muted">View screenshots, apps and URLs used, and activity rates, or turn these features off altogether.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Track time off</b></h5>
                                <p className="card-text text-muted">Add policies and view time off balances all through Dreamstack.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Expenses</b></h5>
                                <p className="card-text text-muted">Submit and reimburse expenses for your agency outings, client meetings, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={`card w-100 h-100 p-4 ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h1>📄</h1>
                                <h5 className="card-subtitle my-3"><b>Integrations</b></h5>
                                <p className="card-text text-muted">Connect Dreamstack with the apps you’re already using — Gusto, Slack, Zapier, to name a few.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

