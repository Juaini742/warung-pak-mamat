import { useState } from "react";
import { useDispatch } from "react-redux";
import { postQouteAction } from "../../../store/actions/qouteAdd.action";
import {
  CardBody,
  Button,
  InputBorder,
  TitleForm,
  LeftIn,
} from "../../atom/index";

function FormQoute() {
  const dispatch = useDispatch();
  const [qouteData, setQouteData] = useState({ name: "", rate: "", quote: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQouteData({ ...qouteData, [name]: value });
  };

  const handleAddQoute = (e) => {
    e.preventDefault();
    console.log("oke");
    dispatch(postQouteAction(qouteData, () => console.log("oke window load")));
    console.log("oke");
  };

  return (
    <section>
      <LeftIn>
        <CardBody variant="card-backdrop">
          <TitleForm>Qoute Form</TitleForm>
          <p className="text-center my-8">add your quote here</p>
          <form onSubmit={handleAddQoute}>
            <div className="flex flex-col">
              <InputBorder
                type="text"
                value={qouteData.name}
                onChange={handleInputChange}
                name="name"
                text="Name"
              />
            </div>
            <div className="flex flex-col my-4">
              <InputBorder
                type="number"
                value={qouteData.rate}
                onChange={handleInputChange}
                name="rate"
                text="Rate"
              />
            </div>
            <div className="flex flex-col mb-4">
              <InputBorder
                type="text"
                value={qouteData.quote}
                onChange={handleInputChange}
                name="quote"
                text="Quote"
              />
            </div>
            <Button type="submit" variant="primary" className="py-1 px-5">
              Submit
            </Button>
          </form>
        </CardBody>
      </LeftIn>
    </section>
  );
}

export default FormQoute;
