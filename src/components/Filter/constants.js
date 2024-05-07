const filters = [
  {
    id: "minExp",
    label: "Min Experience",
    type: "select",
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    width: 10,
  },
  {
    id: "jobRole",
    label: "Roles",
    type: "select",
    items: ["frontend", "ios", "android", "tech lead", "backend"],
    width: 8,
  },
  {
    id: "location",
    label: "Location",
    type: "select",
    items: ["delhi ncr", "mumbai", "remote", "chennai", "bangalore"],
    width: 8,
  },
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    width: 12,
  },
  {
    id: "minJdSalary",
    label: "Min Base Pay (in K)",
    type: "number",
    width: 12,
  },
];

export default filters;
