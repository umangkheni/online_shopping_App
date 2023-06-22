import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserList() {
  const [User, setUser] = useState([]);
  const [Rindex, setRindex] = useState();

  useEffect(() => {
    let result = axios.get("http://localhost:3000/user");
    result.then((data) => {
      console.log(data.data);
      setUser(data.data);
    });
  }, [Rindex]);

  return (
    <div className="ad-main-box d-flex align-items-center flex-column ">
      <h1 className="add-h1">All Product List</h1>
      <div className="d-flex ap-table flex-column">
        <table className="text-center m-4 table-bordered table-striped table-light">
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Email Id</th>
            <th>Password</th>
            {/* <th>Product Image</th> */}
            <th>Nevigation</th>
          </tr>
          {User.map((Da, i) => {
            // console.log(Da);

            const UserDelete = (id, i) => {
              let result = axios.delete(`http://localhost:3000/user/${id}`);
              console.log(result);
              // console.log(Pdata);
              setRindex(Rindex + 1);
              console.log(Rindex);
            };
            return (
              <tr className="user thead-dark" key={i}>
                <td>{Da.id}.</td>
                <td>{Da.UName}</td>
                <td>{Da.UEmail}</td>
                <td>{Da.RPass}</td>
                {/* <td>
                  <img className="list-img" src={Da.imgUrl} alt="" />
                </td> */}
                <td>
                  {/* <Link to={'/admin/add'} state={{Da}} > */}
                  <button> Edit </button>
                  {/* </Link> */}
                  <button
                    onClick={() => {
                      UserDelete(Da.id);
                    }}
                  >
                    Delet
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
