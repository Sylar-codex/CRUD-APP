import React, { Fragment, useEffect } from "react";
import { getData, deleteData } from "../../utils/api";

function Dis({ data, setData, setEdit, setId }) {
  useEffect(() => {
    getData().then((res) => {
      const newArr = [];
      res.data.forEach((p) => newArr.push(p));
      setData((arr) => [...arr, ...newArr]);
    });
  }, [setData]);
  const onDelete = (id) => {
    deleteData(id).then((res) => {
      setData(data.filter((item) => item.id !== id));
    });
  };
  const onUpdate = (id) => {
    setEdit(true);
    setId(id);
  };
  return (
    <Fragment>
      <h2>Data</h2>
      <table className="table table-striped">
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                {" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  delete
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    onUpdate(item.id);
                  }}
                >
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Dis;
