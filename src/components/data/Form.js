import React, { useState, useEffect } from "react";
import { addData, updateData } from "../../utils/api";

function Form({ data, setData, edit, setEdit, id }) {
  let int = Math.ceil(Math.random() * 10);
  const [val, setVal] = useState({
    userId: int,
    body: "",
    title: "",
  });
  const item = data.find((item) => item.id === id);
  useEffect(() => {
    if (item && edit) {
      setVal({
        userId: item.userId,
        title: item.title,
        body: item.body,
      });
    }
  }, [item, edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, body, title } = val;
    const use = { userId, body, title };

    addData(use).then((res) => {
      setData([...data, res.data]);
    });
    setVal({
      userId: int,
      body: "",
      title: "",
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const { userId, body, title } = val;
    const use = { userId, body, title };

    console.log(use);
    updateData(id, use).then((res) => {
      setData(data.map((item) => (item.id === id ? { ...res.data } : item)));
    });
    setVal({
      userId: int,
      body: "",
      title: "",
    });
    setEdit(false);
  };
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {!edit ? (
        <div className="card card-body mt-4 mb-4">
          <h2>Add data</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                onChange={handleChange}
                type="text"
                placeholder="title"
                name="title"
                value={val.title}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                onChange={handleChange}
                type="text"
                placeholder="body"
                name="body"
                value={val.body}
              />
            </div>
            <div className="form-group mt-1">
              <input className="btn btn-primary" type="submit" value="submit" />
            </div>
          </form>
        </div>
      ) : (
        <div className="card card-body mt-4 mb-4">
          <h2>Edit data</h2>
          <form onSubmit={handleEdit}>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                onChange={handleChange}
                type="text"
                placeholder="title"
                name="title"
                value={val.title}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                onChange={handleChange}
                type="text"
                placeholder="body"
                name="body"
                value={val.body}
              />
            </div>
            <div className="form-group mt-1">
              <input className="btn btn-primary" type="submit" value="submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
