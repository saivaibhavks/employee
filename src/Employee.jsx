const Employee = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table style={{border:'2px solid black'}}>
                <thead style={{border: '1px solid black'}}>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
                    </tr>

                </thead>
                <tbody style={{ border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}


export default Employee;