// export const predefinedTemplates = [
//   {
//     id: "contact-us",
//     name: "Contact Us",
//     fields: [
//       { id: "name", label: "Name", type: "text", required: true },
//       { id: "email", label: "Email", type: "email", required: true },
//       { id: "message", label: "Message", type: "textarea", required: true },
//     ],
//   },
//   {
//     id: "feedback-form",
//     name: "Feedback Form",
//     fields: [
//       { id: "name", label: "Name", type: "text", required: true },
//       { id: "rating", label: "Rating (1-5)", type: "number", required: true, min: 1, max: 5 },
//       { id: "comments", label: "Comments", type: "textarea", required: false },
//     ],
//   },
// ];



export const predefinedTemplates = [
  {
    id: "contact-us",
    name: "Contact Us",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "message", label: "Message", type: "textarea", required: true },
    ],
  },
  {
    id: "feedback-form",
    name: "Feedback Form",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "rating", label: "Rating (1-5)", type: "number", required: true, min: 1, max: 5 },
      { id: "comments", label: "Comments", type: "textarea", required: false },
    ],
  },
  {
    id: "job-application",
    name: "Job Application",
    fields: [
      { id: "full-name", label: "Full Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "resume", label: "Upload Resume", type: "file", required: true },
      { id: "cover-letter", label: "Cover Letter", type: "textarea", required: false },
    ],
  },
  {
    id: "event-registration",
    name: "Event Registration",
    fields: [
      { id: "attendee-name", label: "Attendee Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: false },
      { id: "session-choice", label: "Select a Session", type: "select", required: true, options: ["Morning", "Afternoon", "Evening"] },
    ],
  },
  {
    id: "customer-survey",
    name: "Customer Survey",
    fields: [
      { id: "customer-name", label: "Customer Name", type: "text", required: false },
      { id: "email", label: "Email", type: "email", required: false },
      { id: "product-rating", label: "Product Rating (1-10)", type: "number", required: true, min: 1, max: 10 },
      { id: "suggestions", label: "Any Suggestions?", type: "textarea", required: false },
    ],
  },
  {
    id: "bug-report",
    name: "Bug Report",
    fields: [
      { id: "reporter-name", label: "Your Name", type: "text", required: false },
      { id: "email", label: "Email", type: "email", required: false },
      { id: "bug-description", label: "Describe the Issue", type: "textarea", required: true },
      { id: "severity", label: "Severity Level", type: "select", required: true, options: ["Low", "Medium", "High", "Critical"] },
    ],
  },
];