import { useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) =>{
        setStatus(e.target.value === 'Active');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onClose();
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                    <form method="dialog" onSubmit = {handleSubmit}>

                        <label className="input">
                            Name
                            <input type="text" className="grow" placeholder="Vaishnavi" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label className="input">
                            Email
                            <input type="email" className="grow" placeholder="vaishnavi123@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className="input">
                            Job
                            <input type="text" className="grow" placeholder="Frotend Intern" value={job} onChange={(e) => setJob(e.target.value)} />
                        </label>
                        <div className="flex mb-4 justify-between">
                            <label className="input">
                                Rate
                                <input type="number" className="grow" placeholder="105" value={rate} onChange={(e) => setRate(e.target.value)} />
                            </label>
                            <select value = {status ? 'Active' : 'Inactive'} className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
                                <option>Inactive</option>
                                <option>Active</option>
                            </select>
                        </div>


                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                    
                    <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}