const student_create_form = document.getElementById("student-create");
const studentList = document.getElementById("student_data_list");
const post_update_btn = document.getElementById("btn-close");
const msg = document.querySelector(".msg");


//show student data
const getAllStudents = () => {
    const students = getDataLS("Students");

    let dataList = "";
    if(students){
        students.forEach((item, index) => {
            dataList += `
            <tr>
            <td>${index + 1}</td>
            <td>
              <img 
                src="${item.photo}"
                alt=""
              />
            </td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.location}</td>
            <td>${timeAnukul(item.time)}</td>
            <td>
              <button
                class="btn btn-sm btn-info"
                data-bs-toggle="modal"
                data-bs-target="#student_view"
                onclick="showSingleStudent('${item.id}')"
              >
                <i class="fa fa-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning">
                <i class="fa fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-danger">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
            `;
        });
    }else{
        dataList = `
            <tr>
                <td colspan="7" class="text-center text-danger ">No data found</td>
            </tr>
        `;
    };
    studentList.innerHTML = dataList;
};

const showSingleStudent = (id) => {
  console.log(getSingleData("students", id));
};

getAllStudents();


// Now submit Student create form
student_create_form.onsubmit = (e) => {
    e.preventDefault();

    //get form data
    const form_data = new FormData(e.target);
    const {name, email, phone, location, photo} = Object.fromEntries(form_data);

    //form validation
    if(!name || !email || !phone || !location || !photo){
        msg.innerHTML = createAlert("All fields are required");
    }else if(!isEmail(email)){
        msg.innerHTML = createAlert("Invalid email address", "warning");
    }else if(!isPhone(phone)){
        msg.innerHTML = createAlert("Invalid phone number", "warning");
    }else {

        sendDataLS("Students", {
            id: createID(),
            name,
            email,
            phone,
            location,
            time: Date.now(),
            photo,
        });

        msg.innerHTML = createAlert("Student data Created", "success");

        e.target.reset();
        getAllStudents();
        post_update_btn.click();

    }
};