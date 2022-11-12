import { CardForum } from "../../components/Cards";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";
import { apiRequest } from "../../utils/apiRequest";

const ForumMentor = () => {
  const [dataForum, setDataForum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [objSubmit, setObjSubmit] = useState({});
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
      caption: comment,
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
  return (
    <Layout>
      <div className="pb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
          Forum Class
        </h1>
        <p className="text-abu font-light text-[8px] md:text-sm">
          Lorem ipsum dolor sit amet
        </p>
        <div className="mt-[3rem] mb-[2rem] space-y-6">
          {loading ? (
            <p>loading...</p>
          ) : (
            dataForum?.map((item) => (
              <CardForum
                key={item.id_status}
                names={item.name}
                img={item.images}
                captions={item.caption}
                comments={item.comments}
                onSubmitComment={(e) => handleComment(e)}
                onChangeComment={(e) => setComment(e.target.value)}
                valueComment={objSubmit.comment}
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

export default ForumMentor;
