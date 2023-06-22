import axios from "axios";

const UserCart = async (data) => {
  let result;

  console.log(data);

  if (data.userId) {

    await axios(`http://localhost:3000/UserCart`, data).then((d)=>{
        console.log(d);
    })

  } else if (data.Id) {
    await axios(`http://localhost:3000/UserCart/?userId=3`).then((d) => {
      // console.log(d.data);
      result = d.data;
    });
  }
  console.log(result);
  return result;
};

export default UserCart;
