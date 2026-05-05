import React, { use, useEffect, useState } from "react";

function StudentHeaderComponent(props) {
  const { inputSearch } = props;
  const [search, setSearch] = useState(inputSearch);
  // hàm xử lý khi click vào các nút thêm mới sinh viên
  const handleAdd = () => {
    // tạo biến obj để chứa các thông tin cần truyền lên trên
    const evt = {
      action: "add",
      status: true,
      student: {
        id: "",
        name: "",
        age: 0,
        sex: "Nam",
        birth: "",
        prov: "HN",
        adress: "",
      },
    };
    // thông qua props gọi hàm onIsToogle để truyền thôn tin lên component cha là App.jsx
    props.onIsToogle(evt);
  };

  const handleChange = (e) => {    
    const { name, value } = e.target;
    setSearch(value);
    // props.onSearch(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    props.onSearch(search);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    // console.log("StudentHeaderComponent: ", value);
    // Cập nhật trạng thái sắp xếp
    props.onSort({ type: value.split("-")[0], order: value.split("-")[1] });
  }

  return (
    <>
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              onClick={handleAdd}
              className="btn btn-primary btn-icon-text"
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                name="search"
                value={search}
                onChange={handleChange}
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text"
              onClick={handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onClick={handleSort}>
              <option value="">Sắp xếp</option>
              <option value="sv-asc">Mã SV ASC</option>
              <option value="sv-desc">Mã SV DESC</option>
              <option value="name-asc">Tên ASC</option>
              <option value="name-desc">Tên DESC</option>
              <option value="age-asc">Tuổi ASC</option>
              <option value="age-desc">Tuổi DESC</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentHeaderComponent;
