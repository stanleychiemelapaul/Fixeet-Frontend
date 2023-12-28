import StudentImage from "../../public/authbg.png";
import SubjectImage from "../../public/authbg.png";
import TeacherImage from "../../public/authbg.png";
import ParentImage from "../../public/authbg.png";
import DollarImage from "../../public/authbg.png";
import StudentIcon from "../../public/authbg.png";
import EmployeeImage from "../../public/authbg.png";

export const sessionList = [
  { value: "2023/24", label: "2023/24 session" },
  { value: "2022/23", label: "2022/23 session" },
  { value: "2021/22", label: "2021/22 session" },
  { value: "2020/21", label: "2020/21 session" },
  { value: "2019/20", label: "2019/20 session" },
];

export const term = [
  { value: "2023/24", label: "First Term" },
  { value: "2022/23", label: "Second Term" },
  { value: "2021/22", label: "Third Term" },
];

export const genderList = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

export const schoolList = [
  { value: "j primary school", label: "J Primary School" },
  { value: "k primary school", label: "K Primary School" },
];

export const relationshipList = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "uncle", label: "Uncle" },
  { value: "aunty", label: "Aunty" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
];

export const userTypeList = [
  { value: "role", label: "Super Admin" },
  { value: "role", label: "Admin" },
  { value: "role", label: "Teacher" },
  { value: "role", label: "Parent" },
  { value: "role", label: "Student" },
];

export const designationList = [
  { value: "ade", label: "Teacher" },
  { value: "bola", label: "Principal" },
  { value: "cynthia", label: "Non-academic staff" },
  { value: "david", label: "Gateman" },
  { value: "eddy", label: "Admin" },
];

export const staffList = [
  { value: "ade", label: "Ade" },
  { value: "bola", label: "Bola" },
  { value: "cynthia", label: "Cynthia" },
  { value: "david", label: "David" },
  { value: "eddy", label: "Eddy" },
];

export const weeklyList = [
  { value: "Week 1", label: "Week 1" },
  { value: "Week 2", label: "Week 2" },
  { value: "Week 3", label: "Week 3" },
  { value: "Week 4", label: "Week 4" },
  { value: "Week 5", label: "Week 5" },
];

export const pieData = [
  { name: "STUDENTS", value: 740 },
  { name: "TEACHERS", value: 300 },
  { name: "STAFFS", value: 200 },
  { name: "WORKERS", value: 150 },
];

export const attendancePieData = [
  { name: "PRESENT", value: 140 },
  { name: "ABSENT", value: 50 },
  { name: "HOLIDAY", value: 20 },
  { name: "BREAK", value: 15 },
];

export const barData = [
  {
    name: "Jan",
    "Last Year": 3020,
    "This Year": 4413,
    amt: 4413,
  },
  {
    name: "Feb",
    "Last Year": 2455,
    "This Year": 3769,
    amt: 3769,
  },
  {
    name: "Mar",
    "Last Year": 4093,
    "This Year": 2379,
    amt: 2379,
  },
  {
    name: "Apr",
    "Last Year": 2618,
    "This Year": 4807,
    amt: 4807,
  },
  {
    name: "May",
    "Last Year": 3035,
    "This Year": 2107,
    amt: 2107,
  },
  {
    name: "Jun",
    "Last Year": 4687,
    "This Year": 3753,
    amt: 3753,
  },
  {
    name: "Jul",
    "Last Year": 3438,
    "This Year": 3515,
    amt: 3515,
  },
  {
    name: "Aug",
    "Last Year": 2507,
    "This Year": 4973,
    amt: 4973,
  },
  {
    name: "Sep",
    "Last Year": 4210,
    "This Year": 2358,
    amt: 2358,
  },
  {
    name: "Oct",
    "Last Year": 3355,
    "This Year": 4375,
    amt: 4375,
  },
  {
    name: "Nov",
    "Last Year": 3589,
    "This Year": 3145,
    amt: 3145,
  },
  {
    name: "Dec",
    "Last Year": 3622,
    "This Year": 3659,
    amt: 3659,
  },
];

export const lineData = [
  {
    name: "Mon",
    "Last Week": 4000,
    "This Week": 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    "Last Week": 3000,
    "This Week": 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    "Last Week": 2000,
    "This Week": 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    "Last Week": 2780,
    "This Week": 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    "Last Week": 1890,
    "This Week": 4800,
    amt: 2181,
  },
];

export const areaData = [
  { name: "Jan", Revenue: 500 },
  { name: "Feb", Revenue: 700 },
  { name: "Mar", Revenue: 300 },
  { name: "Apr", Revenue: 900 },
  { name: "May", Revenue: 600 },
  { name: "Jun", Revenue: 400 },
  { name: "Jul", Revenue: 800 },
  { name: "Aug", Revenue: 350 },
  { name: "Sep", Revenue: 750 },
  { name: "Oct", Revenue: 200 },
  { name: "Nov", Revenue: 950 },
  { name: "Dec", Revenue: 550 },
];

export const populationData = [
  {
    id: 1,
    title: "Students",
    amount: "20,000",
    imgSrc: StudentImage,
  },
  {
    id: 2,
    title: "Teachers",
    amount: "1,000",
    imgSrc: TeacherImage,
  },
  {
    id: 3,
    title: "Parents",
    amount: "6,000",
    imgSrc: ParentImage,
  },
  {
    id: 4,
    title: "Subjects",
    amount: "792",
    imgSrc: SubjectImage,
  },
];

export const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    amount: "₦ 560,0000",
    percent: "Up to 42%",
    duration: "from last year",
    trend: "increase",
    imgSrc: DollarImage,
  },
  {
    id: 2,
    title: "Total Expenses",
    amount: "₦ 340,0000",
    percent: "Up to 5%",
    duration: "from last year",
    trend: "increase",
    imgSrc: DollarImage,
  },
  {
    id: 3,
    title: "Total Students",
    amount: "789,905",
    percent: "Up to 10%",
    duration: "from last year",
    trend: "increase",
    imgSrc: StudentIcon,
  },
  {
    id: 4,
    title: "Total Employees",
    amount: "7,000",
    percent: "Down to 20%",
    duration: "from last year",
    trend: "decrease",
    imgSrc: EmployeeImage,
  },
];

export const schoolsData = [
  {
    name: "Harvard University",
    status: "Active",
    actions: ["view", "send", "delete"],
  },
  {
    name: "Stanford University",
    status: "Inactive",
    actions: ["view", "send", "delete"],
  },
  {
    name: "Massachusetts Institute of Technology",
    status: "Active",
    actions: ["view", "send", "delete"],
  },
  {
    name: "Yale University",
    status: "Pending",
    actions: ["view", "send", "delete"],
  },
  {
    name: "Princeton University",
    status: "Active",
    actions: ["view", "send", "delete"],
  },
];

export const sessionData = [
  {
    session: "2023/24",
    status: "Active",
    actions: ["edit", "delete"],
  },
  {
    session: "2022/23",
    status: "Inactive",
    actions: ["edit", "delete"],
  },
  {
    session: "2021/22",
    status: "Pending",
    actions: ["edit", "delete"],
  },
];

export const userRolesData = [
  {
    name: "John Doe",
    school: "University of Lagos",
    actions: ["view", "send", "delete"],
  },
  {
    name: "Mary Doe",
    school: "International School of Lagos",
    actions: ["view", "send", "delete"],
  },
];

export const permissionData = [
  {
    name: "Dashboard",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
  {
    name: "User Roles",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
  {
    name: "Schools",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
  {
    name: "Reports",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
  {
    name: "Subscriptions",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
  {
    name: "Permissions",
    add: "",
    edit: "",
    delete: "",
    view: "",
  },
];

export const studentsData = [
  {
    id: "2021/2022/001",
    name: "John Doe",
    class: "JSS 1",
    status: "Complete",
    action: "view",
  },
  {
    id: "2021/2022/002",
    name: "Jane Doe",
    class: "JSS 1",
    status: "Pending",
    action: "view",
  },
  {
    id: "2021/2022/003",
    name: "John Doe",
    class: "JSS 1",
    status: "InComplete",
    action: "view",
  },
  {
    id: "2021/2022/004",
    name: "Jane Doe",
    class: "JSS 1",
    status: "Complete",
    action: "view",
  },
  {
    id: "2021/2022/005",
    name: "John Doe",
    class: "JSS 1",
    status: "Pending",
    action: "view",
  },
  {
    id: "2021/2022/006",
    name: "Jane Doe",
    class: "JSS 1",
    status: "InComplete",
    action: "view",
  },
  {
    id: "2021/2022/007",
    name: "John Doe",
    class: "JSS 1",
    status: "Complete",
    action: "view",
  },
  {
    id: "2021/2022/008",
    name: "Jane Doe",
    class: "JSS 1",
    status: "Pending",
    action: "view",
  },
  {
    id: "2021/2022/009",
    name: "John Doe",
    class: "JSS 1",
    status: "InComplete",
    action: "view",
  },
  {
    id: "2021/2022/010",
    name: "Jane Doe",
    class: "JSS 1",
    status: "Complete",
    action: "view",
  },
  {
    id: "2021/2022/011",
    name: "John Doe",
    class: "JSS 1",
    status: "Pending",
    action: "view",
  },
];

export const lessonNotesData = [
  {
    teacher: "Mr. John Doe",
    class: "SSS 2",
    subject: "Mathematics",
    lessonNotes: "Geometry",
    actions: ["view", "download"],
  },
  {
    teacher: "Mrs. Janet",
    class: "JSS 1",
    subject: "English Language",
    lessonNotes: "Oral English",
    actions: ["view", "download"],
  },
  {
    teacher: "Mr. Abdul",
    class: "Pry 5",
    subject: "Computer Science",
    lessonNotes: "Introduction to Computer Science",
    actions: ["view", "download"],
  },
];

export const teacherLessonNotesData = [
  {
    SN: "1",
    class: "SSS 2",
    subject: "Mathematics",
    teacherLessonNotes: "Algebra",
    actions: ["view", "download"],
  },
  {
    SN: "2",
    class: "JSS 1",
    subject: "English Language",
    teacherLessonNotes: "Comprehension",
    actions: ["view", "download"],
  },
  {
    SN: "3",
    class: "Pry 5",
    subject: "Computer Science",
    teacherLessonNotes: "Hardware",
    actions: ["view", "download"],
  },
];

export const classList = [
  { label: "Nursery 1", value: "nursery1" },
  { label: "Nursery 2", value: "nursery2" },
  { label: "Nursery 3", value: "nursery3" },
  { label: "Primary 1", value: "primary1" },
  { label: "Primary 2", value: "primary2" },
  { label: "Primary 3", value: "primary3" },
  { label: "Primary 4", value: "primary4" },
  { label: "Primary 5", value: "primary5" },
  { label: "Primary 6", value: "primary6" },
  { label: "JSS 1", value: "jss1" },
  { label: "JSS 2", value: "jss2" },
  { label: "JSS 3", value: "jss3" },
  { label: "SSS 1", value: "sss1" },
  { label: "SSS 2", value: "sss2" },
  { label: "SSS 3", value: "sss3" },
];

export const rolesList = [
  { value: "1", label: "All" },
  { value: "2", label: "Super Admin" },
  { value: "3", label: "Admin" },
  { value: "4", label: "Teachers" },
  { value: "5", label: "Students" },
];

export const classData = [
  {
    class: "SSS 2",
    arm: "Diamond",
    teacher: "Mr. Wicket Sane",
    subject: ["Mathematics", "English Language", "Physics", "Chemistry"],
    action: "edit",
  },
  {
    class: "JSS 1",
    arm: "Excel",
    teacher: "Mrs. Flora",
    subject: ["English Language", "Science and Technology", "Mathematics"],
    action: "edit",
  },
  {
    class: "Pry 5",
    arm: "Sapphire",
    teacher: "Mr. Santos",
    subject: ["Computer Science", "PHE", "Civic Education"],
    action: "edit",
  },
];

export const subjectData = [
  {
    subject: "Mathematics",
    action: "edit",
  },
  {
    subject: "English Language",
    action: "edit",
  },
  {
    subject: "Computer Science",
    action: "edit",
  },
];

export const announcementData = [
  {
    announcement: "School resumes on 12th of September",
    date: "12/09/2023",
    actions: ["view", "edit", "archive"],
  },
  {
    announcement: "PTA meeting holds on 1st of November",
    date: "01/11/2023",
    actions: ["view", "edit", "archive"],
  },
];

export const teachersData = [
  {
    name: "Mr Femi",
    imgSrc: "",
    job: "Design Teacher",
    phone: "+234 810 123 4567",
  },
  {
    name: "Godbless Jatomike",
    imgSrc: "",
    job: "English Teacher",
    phone: "+234 810 123 4567",
  },
  {
    name: "Joy Alexander",
    imgSrc: "",
    job: "Mathematics Teacher",
    phone: "+234 810 123 4567",
  },
  {
    name: "Joy Alexander",
    imgSrc: "",
    job: "Design Teacher",
    phone: "+234 810 123 4567",
  },
  {
    name: "Mr Isaac",
    imgSrc: "",
    job: "Mathematics Teacher",
    phone: "+234 810 123 4567",
  },
];

export const studentProfileData = {
  name: "Joy Alexander",
  dob: "12th May, 2005",
  gender: "Female",
  regNo: "12345",
  class: "10th Grade",
  address: "123 Main Street, City",
  guardian: {
    name: "Alexander Olusoji",
    relationship: "Parent",
    email: "alexander@example.com",
    phone: "+1234567890",
    address: "456 Guardian Lane, City",
  },
  teachersComment: [
    {
      comment: "Discipline",
      score: 7.1,
    },
    {
      comment: "Punctual",
      score: 8.6,
    },
    {
      comment: "Hardworking",
      score: 9.2,
    },
    {
      comment: "Committed",
      score: 8.0,
    },
    {
      comment: "Leadership",
      score: 3.4,
    },
  ],
};

export const staffProfileData = {
  name: "Godbless Jatomike",
  designation: "Teacher",
  yearJoined: "2005",
  gender: "Male",
  class: "Primary 1, Primary 5",
  address: "Lagos Ibadan expressway",
  guardian: {
    name: "Alexander Olusoji",
    relationship: "Parent",
    email: "alexander@example.com",
    phone: "+1234567890",
    address: "456 Guardian Lane, City",
  },
  teachersComment: [
    {
      comment: "Discipline",
      score: 7.1,
    },
    {
      comment: "Punctual",
      score: 8.6,
    },
    {
      comment: "Hardworking",
      score: 9.2,
    },
    {
      comment: "Committed",
      score: 8.0,
    },
    {
      comment: "Leadership",
      score: 3.4,
    },
  ],
};

export const usersData = [
  { value: "Mr Doe", label: "Mr Doe" },
  { value: "Alex Hugs", label: "Alex Hugs" },
  { value: "John Doe", label: "John Doe" },
  { value: "Jane Doe", label: "Jane Doe" },
];

export const subjectList = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "English Language", label: "English Language" },
  { value: "Computer Science", label: "Computer Science" },
  { value: "Physics", label: "Physics" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Biology", label: "Biology" },
];

export const studentsScoreData = [
  {
    no: 1,
    image: "https://bit.ly/sage-adebayo",
    name: "Adebayo Micheal",
    exam: "46",
    test1: "7",
    test2: "8",
    assignment: "9",
    total: "70",
  },
  {
    no: 2,
    image: "https://bit.ly/sage-johnson",
    name: "Johnson Adeleke",
    exam: "55",
    test1: "6",
    test2: "9",
    assignment: "8",
    total: "78",
  },
  {
    no: 3,
    image: "https://bit.ly/sage-omotola",
    name: "Omotola Akinwale",
    exam: "60",
    test1: "9",
    test2: "8",
    assignment: "7",
    total: "84",
  },
  {
    no: 4,
    image: "https://bit.ly/sage-chinwe",
    name: "Chinwe Eze",
    exam: "50",
    test1: "8",
    test2: "7",
    assignment: "6",
    total: "71",
  },
  {
    no: 5,
    image: "https://bit.ly/sage-james",
    name: "James Abubakar",
    exam: "58",
    test1: "7",
    test2: "6",
    assignment: "8",
    total: "79",
  },
  {
    no: 6,
    image: "https://bit.ly/sage-linda",
    name: "Linda Obi",
    exam: "45",
    test1: "6",
    test2: "7",
    assignment: "8",
    total: "66",
  },
  {
    no: 7,
    image: "https://bit.ly/sage-blessing",
    name: "Blessing Okonkwo",
    exam: "52",
    test1: "8",
    test2: "9",
    assignment: "7",
    total: "76",
  },
  {
    no: 8,
    image: "https://bit.ly/sage-frank",
    name: "Franklin Udo",
    exam: "57",
    test1: "9",
    test2: "8",
    assignment: "7",
    total: "81",
  },
  {
    no: 9,
    image: "https://bit.ly/sage-adele",
    name: "Adele Okafor",
    exam: "49",
    test1: "7",
    test2: "8",
    assignment: "6",
    total: "70",
  },
  {
    no: 10,
    image: "https://bit.ly/sage-mary",
    name: "Mary Nwosu",
    exam: "54",
    test1: "8",
    test2: "7",
    assignment: "9",
    total: "78",
  },
  {
    no: 11,
    image: "https://bit.ly/sage-chuka",
    name: "Chuka Eke",
    exam: "60",
    test1: "9",
    test2: "8",
    assignment: "8",
    total: "85",
  },
  {
    no: 12,
    image: "https://bit.ly/sage-nneka",
    name: "Nneka Iheanacho",
    exam: "51",
    test1: "7",
    test2: "7",
    assignment: "7",
    total: "72",
  },
  {
    no: 13,
    image: "https://bit.ly/sage-obi",
    name: "Obi Akpan",
    exam: "55",
    test1: "8",
    test2: "8",
    assignment: "7",
    total: "78",
  },
  {
    no: 14,
    image: "https://bit.ly/sage-musa",
    name: "Musa Mohammed",
    exam: "47",
    test1: "7",
    test2: "6",
    assignment: "6",
    total: "66",
  },
  {
    no: 15,
    image: "https://bit.ly/sage-susan",
    name: "Susan Abubakar",
    exam: "53",
    test1: "8",
    test2: "9",
    assignment: "8",
    total: "78",
  },
  {
    no: 16,
    image: "https://bit.ly/sage-samuel",
    name: "Samuel Ekpo",
    exam: "59",
    test1: "9",
    test2: "8",
    assignment: "7",
    total: "83",
  },
  {
    no: 17,
    image: "https://bit.ly/sage-ifeoma",
    name: "Ifeoma Igwe",
    exam: "50",
    test1: "7",
    test2: "8",
    assignment: "7",
    total: "72",
  },
  {
    no: 18,
    image: "https://bit.ly/sage-david",
    name: "David Oluwatosin",
    exam: "56",
    test1: "8",
    test2: "9",
    assignment: "8",
    total: "81",
  },
  {
    no: 19,
    image: "https://bit.ly/sage-ekene",
    name: "Ekene Nwafor",
    exam: "48",
    test1: "7",
    test2: "7",
    assignment: "6",
    total: "68",
  },
  {
    no: 20,
    image: "https://bit.ly/sage-chinonye",
    name: "Chinonye Akabueze",
    exam: "57",
    test1: "8",
    test2: "8",
    assignment: "8",
    total: "81",
  },
];

export const studentResultData = [
  {
    subject: "English Language",
    exam: 70,
    test1: 10,
    test2: 10,
    assignment: 10,
    total: [
      {
        mark: 70,
        point: 7,
        grade: "A",
        comments: "Very Good",
      },
    ],
  },
  {
    subject: "Mathematics",
    exam: 80,
    test1: 15,
    test2: 20,
    assignment: 12,
    total: [
      {
        mark: 85,
        point: 8,
        grade: "A+",
        comments: "Excellent",
      },
    ],
  },
  {
    subject: "Science",
    exam: 75,
    test1: 12,
    test2: 18,
    assignment: 8,
    total: [
      {
        mark: 70,
        point: 7,
        grade: "A",
        comments: "Very Good",
      },
    ],
  },
  {
    subject: "History",
    exam: 60,
    test1: 8,
    test2: 10,
    assignment: 9,
    total: [
      {
        mark: 70,
        point: 7,
        grade: "A",
        comments: "Very Good",
      },
    ],
  },
  {
    subject: "Geography",
    exam: 75,
    test1: 14,
    test2: 17,
    assignment: 12,
    total: [
      {
        mark: 80,
        point: 8,
        grade: "A+",
        comments: "Excellent",
      },
    ],
  },
  {
    subject: "Physics",
    exam: 85,
    test1: 18,
    test2: 20,
    assignment: 15,
    total: [
      {
        mark: 90,
        point: 9,
        grade: "A+",
        comments: "Outstanding",
      },
    ],
  },
  {
    subject: "Chemistry",
    exam: 78,
    test1: 15,
    test2: 19,
    assignment: 10,
    total: [
      {
        mark: 80,
        point: 8,
        grade: "A+",
        comments: "Excellent",
      },
    ],
  },
  {
    subject: "Biology",
    exam: 70,
    test1: 12,
    test2: 15,
    assignment: 11,
    total: [
      {
        mark: 75,
        point: 7.5,
        grade: "A",
        comments: "Very Good",
      },
    ],
  },
  {
    subject: "Computer Science",
    exam: 90,
    test1: 20,
    test2: 25,
    assignment: 18,
    total: [
      {
        mark: 95,
        point: 9.5,
        grade: "A+",
        comments: "Outstanding",
      },
    ],
  },
  {
    subject: "Physical Education",
    exam: 88,
    test1: 16,
    test2: 20,
    assignment: 14,
    total: [
      {
        mark: 85,
        point: 8.5,
        grade: "A+",
        comments: "Excellent",
      },
    ],
  },
  {
    subject: "Art",
    exam: 65,
    test1: 10,
    test2: 13,
    assignment: 11,
    total: [
      {
        mark: 70,
        point: 7,
        grade: "A",
        comments: "Very Good",
      },
    ],
  },
  {
    subject: "Music",
    exam: 75,
    test1: 12,
    test2: 15,
    assignment: 9,
    total: [
      {
        mark: 80,
        point: 8,
        grade: "A+",
        comments: "Excellent",
      },
    ],
  },
];

export const staffData = [
  {
    imageUrl: "https://example.com/image1.jpg",
    name: "John Doe",
    role: "Manager",
    date: "2022-01-01",
    contact: "john@example.com",
  },
  {
    imageUrl: "https://example.com/image2.jpg",
    name: "Jane Smith",
    role: "Developer",
    date: "2022-02-15",
    contact: "jane@example.com",
  },
  {
    imageUrl: "https://example.com/image3.jpg",
    name: "Bob Johnson",
    role: "Designer",
    date: "2022-03-10",
    contact: "bob@example.com",
  },
  {
    imageUrl: "https://example.com/image4.jpg",
    name: "Alice Williams",
    role: "HR",
    date: "2022-04-05",
    contact: "alice@example.com",
  },
  {
    imageUrl: "https://example.com/image5.jpg",
    name: "Charlie Brown",
    role: "Marketing",
    date: "2022-05-20",
    contact: "charlie@example.com",
  },
  {
    imageUrl: "https://example.com/image6.jpg",
    name: "Eva Davis",
    role: "Accountant",
    date: "2022-06-15",
    contact: "eva@example.com",
  },
  {
    imageUrl: "https://example.com/image7.jpg",
    name: "Mike Wilson",
    role: "IT Support",
    date: "2022-07-01",
    contact: "mike@example.com",
  },
  {
    imageUrl: "https://example.com/image8.jpg",
    name: "Olivia Turner",
    role: "Sales",
    date: "2022-08-25",
    contact: "olivia@example.com",
  },
  {
    imageUrl: "https://example.com/image9.jpg",
    name: "Daniel Lee",
    role: "Customer Service",
    date: "2022-09-10",
    contact: "daniel@example.com",
  },
  {
    imageUrl: "https://example.com/image10.jpg",
    name: "Sophia Harris",
    role: "Operations",
    date: "2022-10-05",
    contact: "sophia@example.com",
  },
];

export const studentsReportData = [
  {
    imageUrl: "https://example.com/student1.jpg",
    name: "Alice Johnson",
    class: "Grade 8",
    parentName: "John Johnson",
    contact: "+1234567890",
  },
  {
    imageUrl: "https://example.com/student2.jpg",
    name: "Bob Smith",
    class: "Grade 9",
    parentName: "Jane Smith",
    contact: "+9876543210",
  },
  {
    imageUrl: "https://example.com/student3.jpg",
    name: "Charlie Davis",
    class: "Grade 7",
    parentName: "David Davis",
    contact: "+1122334455",
  },
  {
    imageUrl: "https://example.com/student4.jpg",
    name: "Diana Wilson",
    class: "Grade 10",
    parentName: "Mike Wilson",
    contact: "+9988776655",
  },
  {
    imageUrl: "https://example.com/student5.jpg",
    name: "Eva Turner",
    class: "Grade 6",
    parentName: "Olivia Turner",
    contact: "+5544332211",
  },
  {
    imageUrl: "https://example.com/student6.jpg",
    name: "Frank Harris",
    class: "Grade 8",
    parentName: "Sophia Harris",
    contact: "+1122334455",
  },
  {
    imageUrl: "https://example.com/student7.jpg",
    name: "Grace Lee",
    class: "Grade 9",
    parentName: "Daniel Lee",
    contact: "+9988776655",
  },
  {
    imageUrl: "https://example.com/student8.jpg",
    name: "Henry Brown",
    class: "Grade 7",
    parentName: "Charlie Brown",
    contact: "+5544332211",
  },
  {
    imageUrl: "https://example.com/student9.jpg",
    name: "Ivy Turner",
    class: "Grade 10",
    parentName: "Eva Turner",
    contact: "+1122334455",
  },
  {
    imageUrl: "https://example.com/student10.jpg",
    name: "Jack Wilson",
    class: "Grade 6",
    parentName: "Mike Wilson",
    contact: "+9988776655",
  },
];

export const attendanceData = [
  {
    name: "John Doe",
    class: "JSS 1",
    action: "view",
  },
  {
    name: "Jane Smith",
    class: "SSS 2",
    action: "view",
  },
  {
    name: "Bob Johnson",
    class: "JSS 3",
    action: "view",
  },
  {
    name: "Alice Williams",
    class: "SSS 1",
    action: "view",
  },
  {
    name: "Charlie Brown",
    class: "JSS 2",
    action: "view",
  },
  {
    name: "Eva Davis",
    class: "SSS 3",
    action: "view",
  },
  {
    name: "Frank Harris",
    class: "JSS 1",
    action: "view",
  },
  {
    name: "Grace Lee",
    class: "SSS 2",
    action: "view",
  },
  {
    name: "Henry Turner",
    class: "JSS 3",
    action: "view",
  },
  {
    name: "Ivy Wilson",
    class: "SSS 1",
    action: "view",
  },
];

export const myEventsList = [
  {
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2021, 3, 0),
    end: new Date(2021, 3, 1),
  },
  {
    title: "Long Event",
    start: new Date(2021, 3, 7),
    end: new Date(2021, 3, 10),
  },

  {
    title: "DTS STARTS",
    start: new Date(2021, 2, 13, 0, 0, 0),
    end: new Date(2021, 2, 20, 0, 0, 0),
  },

  {
    title: "DTS ENDS",
    start: new Date(2021, 10, 6, 0, 0, 0),
    end: new Date(2021, 10, 13, 0, 0, 0),
  },

  {
    title: "Some Event",
    start: new Date(2021, 3, 9, 0, 0, 0),
    end: new Date(2021, 3, 9, 0, 0, 0),
  },
  {
    title: "Conference",
    start: new Date(2021, 3, 11),
    end: new Date(2021, 3, 13),
    desc: "Big conference for important people",
  },
  {
    title: "Meeting",
    start: new Date(2021, 3, 12, 10, 30, 0, 0),
    end: new Date(2021, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    title: "Lunch",
    start: new Date(2021, 3, 12, 12, 0, 0, 0),
    end: new Date(2021, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
];

export const txnTableData = [
  {
    id: 1,
    name: "John Doe",
    date: "12/12/2021",
    txnId: "123456789",
    amount: "₦ 100,000",
    phone: "08012345678",
    paymentMode: "Card",
    status: "Success",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "11/25/2021",
    txnId: "987654321",
    amount: "₦ 75,000",
    phone: "08123456789",
    paymentMode: "Bank Transfer",
    status: "Pending",
  },
  {
    id: 3,
    name: "Alice Johnson",
    date: "10/05/2021",
    txnId: "567890123",
    amount: "₦ 120,000",
    phone: "09098765432",
    paymentMode: "Cash",
    status: "Failed",
  },
  {
    id: 4,
    name: "Bob Williams",
    date: "09/15/2021",
    txnId: "345678901",
    amount: "₦ 50,000",
    phone: "07087654321",
    paymentMode: "Card",
    status: "Success",
  },
  {
    id: 5,
    name: "Eva Davis",
    date: "08/03/2021",
    txnId: "654321098",
    amount: "₦ 90,000",
    phone: "08011223344",
    paymentMode: "Bank Transfer",
    status: "Success",
  },
  {
    id: 6,
    name: "Michael Lee",
    date: "07/22/2021",
    txnId: "234567890",
    amount: "₦ 60,000",
    phone: "08098765432",
    paymentMode: "Card",
    status: "Pending",
  },
  {
    id: 7,
    name: "Sophia White",
    date: "06/14/2021",
    txnId: "789012345",
    amount: "₦ 80,000",
    phone: "08122334455",
    paymentMode: "Cash",
    status: "Success",
  },
  {
    id: 8,
    name: "David Miller",
    date: "05/07/2021",
    txnId: "890123456",
    amount: "₦ 110,000",
    phone: "09087654321",
    paymentMode: "Bank Transfer",
    status: "Failed",
  },
  {
    id: 9,
    name: "Olivia Brown",
    date: "04/19/2021",
    txnId: "012345678",
    amount: "₦ 70,000",
    phone: "08011223344",
    paymentMode: "Card",
    status: "Pending",
  },
  {
    id: 10,
    name: "Daniel Taylor",
    date: "03/02/2021",
    txnId: "456789012",
    amount: "₦ 95,000",
    phone: "08133445566",
    paymentMode: "Cash",
    status: "Success",
  },
];

export const webFeaturesData = [
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Attendance Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Attendance Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Attendance Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
];
export const webSchoolFeaturesData = [
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Records Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
  {
    title: "Attendance Management",
    description:
      "Track and analyze students academic history via class and subject attendance, charts, score cards and transcripts.",
  },
];
