import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeadingItems from "../component/PageHeader/HeadingItems";
import TableNavs from "../component/TableNavs/TableNavs";
import { IoIosAdd } from "react-icons/io";
import TableHeader from "../component/TableHeader/TableHeader";
import Table from "../component/Table/Table";
import TableFooter from "../component/TableFooter/TableFooter";
import { searchUsers } from "../helper/search";

const tableHeadings = [
  "ID",
  "photo",
  "Name",
  "Phone No.",
  "Email",
  "Joining Date",
  "Emp. Dept.",
  "Emp. DESG.",
  "Shift",
  "Status",
  "Action",
];

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users from backend:", data);
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleEdit = (user) => {
    navigate(`/edit-employee/${user.id}`, { state: { userData: user } });
  };

  const handleView = (user) => {
    navigate(`/employee-detail/${user.id}`);
  };

  const handleDelete = async (id) => {
    const numericId = parseInt(id, 10);
    try {
      const res = await fetch(`http://localhost:5000/api/users/${numericId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setUsers((prev) => prev.filter((u) => u.id !== numericId));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const filteredUsers = searchUsers(users, query);

  const downloadData = () => {
    const dataStr = JSON.stringify(users, null, 2);
    const blob = new Blob([dataStr], { type: "application/text" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "user-data.text";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="main-view-content" id="contentWrapper">
      <div className="content">
        <HeadingItems
          navigateto={"/employee/add"}
          heading={"Employee Onboard"}
          icon={<IoIosAdd size={20} />}
          title={"Add Employee"}
        />
        <div className="card mb-4">
          <div className="card-body">
            <TableNavs />
            <div className="tab-content mt-4" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="tab-one"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex={0}
              >
                <TableHeader
                  downloadData={downloadData}
                  query={query}
                  setQuery={setQuery}
                />
                <Table
                  data={filteredUsers}
                  headings={tableHeadings}
                  onEdit={handleEdit}
                  onView={handleView}
                  onDelete={handleDelete}
                />
                <TableFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
