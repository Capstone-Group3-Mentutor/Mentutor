import { CardForum } from "../../components/Cards";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";
import { apiRequest } from "../../utils/apiRequest";
import toys1 from "../../assets/toys-1.png";
import { BsImageFill } from "react-icons/bs";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const ForumMentee = () => {
  const [dataForum, setDataForum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [objSubmit, setObjSubmit] = useState({});
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    fetchForum();
  }, []);

  const fetchForum = () => {
    setLoading(true);
    apiRequest("forum", "get")
      .then((res) => {
        setDataForum(res.data);
      })
      .catch((err) => {
        const { data } = err.response;
        Swal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleComment = (e) => {
    e.preventDefault();
    const body = {
      comment,
    };
    apiRequest(`forum/${objSubmit.id_status}`, "post", body)
      .then((res) => {
        const data = res.message;
        console.log(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => fetchForum());
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("forum", "post", objSubmit, "multipart/form-data")
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success Update !",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => fetchForum());
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className="pb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
          Discuss with your classmate
        </h1>
        <p className="text-abu font-light text-[8px] md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-[3rem] mb-[2rem] ">
          {/* ---Card Upload---- */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card py-4 px-4  lg:p-10 rounded-[10px]"
          >
            <div className="flex space-x-2 md:space-x-9 items-center">
              <img
                src={toys1}
                alt="avatar"
                className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rounded-full mr-9"
              />

              <CustomInput
                id="input-status"
                type="text"
                placeholder="share something....."
                category="Status"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                  handleChange(e.target.value, "caption");
                }}
              />
            </div>
            <img
              className="w-[4rem] h-[4rem] md:w-[7rem] mt-4 md:h-[7rem] rounded-sm object-cover"
              src={image}
              alt="img"
            />
            <div className="flex mt-5 justify-between">
              <label
                id="btn-upload-gbr"
                className="cursor-pointer flex h-8 w-8 md:h-10 md:w-10 bg-button  items-center justify-center rounded-[5px]"
                for="btn-gbr"
              >
                <BsImageFill className="text-putih" />
                <input
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                    handleChange(e.target.files[0], "images");
                  }}
                  accept="image/png,image/jpg"
                  type="file"
                  id="btn-gbr"
                  className="text-card placeholder:none hidden "
                />
              </label>

              <CustomButton id="btn-send" label="Send" color="Primary" />
            </div>
          </form>

          {/* ---end Card--- */}
        </div>
        <div className="space-y-8">
          {loading ? (
            <p>loading</p>
          ) : (
            dataForum?.map((item) => (
              <CardForum
                key={item.id_status}
                names={item.name}
                img={item.images}
                captions={item.caption}
                comment={item.comments}
                onSubmitComment={(e) => handleComment(e)}
                onChangeComment={(e) => setObjSubmit(e.target.value)}
                valueComment={comment}
                onClickComment={() => {
                  setObjSubmit({
                    id_status: item?.id_status,
                  });
                }}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ForumMentee;
