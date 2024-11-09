const Employee = ({ item }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                margin: '10px',
                fontSize: '30px'
            }}>Items List</div>
            <div>
                <button style={{ margin: '10px' }}>Items</button>
                <button style={{ margin: '10px' }}>Cart</button>
            </div>

            <table style={{ border: '2px solid black', margin: '20px', padding:'10px' }}>
                <thead style={{ border: '1px solid black', padding:'10px' }}>
                    <tr style={{padding:'10px'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ border: '1px solid black' }}>
                    {
                        item.map((data, index) => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td><button>Add to cart</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}


export default Employee;