import { CardForum } from "../../components/Cards";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";
import { apiRequest } from "../../utils/apiRequest";
import { useTitle } from "../../utils/useTitle";
import { handleAuth } from "../../utils/reducers/reducer";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const ForumMentor = () => {
  useTitle("Class Forum");
  const [cookie, setCookie, removeCookie] = useCookies();
  const [dataForum, setDataForum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [objSubmit, setObjSubmit] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        if (err.response?.status === 401) {
          removeCookie("token");
          dispatch(handleAuth(false));
          navigate("/");
        }
        alert(data.message + "" + "Please re-login !");
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
            dataForum
              ?.sort((a, b) => b.id_status - a.id_status)
              .map((item) => (
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
