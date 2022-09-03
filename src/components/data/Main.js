import React, { Fragment, useState } from "react";
import Form from "./Form";
import Dis from "./Dis";

function Main() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  return (
    <Fragment>
      <Form
        data={data}
        setData={setData}
        edit={edit}
        setEdit={setEdit}
        id={id}
      />
      <Dis data={data} setData={setData} setEdit={setEdit} setId={setId} />
    </Fragment>
  );
}

export default Main;
