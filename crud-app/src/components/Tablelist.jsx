export default function Tablelist() {
    const clients = [
        {id: 1, name: "Nikhil", email: "nikhilchowdarygarpati@gmail.com", job: "Software Engineer", rate: "100", isactive: true},
        {id: 2, name: "Vaishnavi", email: "vaishnavimangati@gmail.com", job: "Software Engineer1", rate: "101", isactive: false},
        {id: 3, name: "Satya", email: "satyasainikhilchowdarygarpati@gmail.com", job: "Software Engineer2", rate: "103", isactive: true}
    ]
    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {clients.map((client) =>(
                        <tr>
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary`:`btn-outline btn-primary`} `}>
                                    {client.isactive ? `Active` : `Inactive`}
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-secondary">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-error">Error</button>
                            </td>

                        </tr>
                    ))}
                    <tbody className="hover:bg-base-300">
                        {/* row 1 */}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}