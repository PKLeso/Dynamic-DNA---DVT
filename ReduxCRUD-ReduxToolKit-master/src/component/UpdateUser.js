import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserobj, FunctionUpdateUser } from "../redux/Action";

const UpdateUser = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("staff");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Since the parameter has been passed by the router
  const { code } = useParams();

  const userObj = useSelector((state) => state.user.userObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { id, name, email, phone, role };
    dispatch(FunctionUpdateUser(userObj, id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserobj(code));
  }, []);

  useEffect(() => {
    if (userObj) {
      setId(userObj.id);
      setName(userObj.name);
      setEmail(userObj.email);
      setPhone(userObj.phone);
      setRole(userObj.role);
    }
  }, [userObj]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header text-align-left">
            <h2>Add User</h2>
          </div>
          <div className="card-body text-align-left">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Id</label>
                  <input
                    value={id || ""}
                    disabled="disabled"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>phone</label>
                  <input
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={role || ""}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
