import getTranslation from "./components/getTranslation";

var object = {
  questionnaire: {
    version: "0.9",
    questions: [
      {
        alias: "q0",
        qtext: getTranslation("q0"),
        placeholder: getTranslation("q0placeholder"),
        type: "text",
        nextq: "q1",
      },
      {
        alias: "q1",
        qtext: getTranslation("q1"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q3",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q2",
          },
        ],
      },
      {
        alias: "q2",
        qtext: getTranslation("q2"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q3",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q3",
          },
        ],
      },
      {
        alias: "q3",
        qtext: getTranslation("q3"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q5",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q4",
          },
        ],
      },
      {
        alias: "q4",
        qtext: getTranslation("q4"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q5",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "exit",
          },
        ],
      },
      {
        alias: "q5",
        qtext: getTranslation("q5"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q5a1"),
            nextq: "q6",
          },
        ],
      },
      {
        alias: "q6",
        qtext: getTranslation("q6"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q6a1"),
            nextq: "q7",
          },
          {
            value: "a2",
            label: getTranslation("q6a2"),
            nextq: "q7",
          },
          {
            value: "a3",
            label: getTranslation("q6a3"),
            nextq: "q7",
          },
          {
            value: "a4",
            label: getTranslation("q6a4"),
            nextq: "q7",
          },
          {
            value: "a5",
            label: getTranslation("q6a5"),
            nextq: "q7",
          },
          {
            value: "a6",
            label: getTranslation("q6a6"),
            nextq: "q7",
          },
          {
            value: "a7",
            label: getTranslation("q6a7"),
            nextq: "q7",
          },
          {
            value: "a8",
            label: getTranslation("q6a8"),
            nextq: "q7",
          },
          {
            value: "a9",
            label: getTranslation("q6a9"),
            nextq: "q7",
          },
        ],
      },
      {
        alias: "q7",
        qtext: getTranslation("q7"),
        image: "flights_description",
        type: "instruct",
        nextq: "q8",
      },
      {
        alias: "q8",
        qtext: getTranslation("q8"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: "1",
            nextq: "q9",
          },
          {
            value: "a2",
            label: "2",
            nextq: "q9",
          },
          {
            value: "a3",
            label: "3",
            nextq: "q9",
          },
          {
            value: "a4",
            label: "4",
            nextq: "q9",
          },
        ],
      },
      {
        alias: "q9",
        qtext: getTranslation("q9"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q9a1"),
            nextq: "q10",
          },
          {
            value: "a2",
            label: getTranslation("q9a2"),
            nextq: "q10",
          },
          {
            value: "a3",
            label: getTranslation("q9a3"),
            nextq: "q10",
          },
          {
            value: "a4",
            label: getTranslation("q9a4"),
            nextq: "q10",
          },
        ],
      },
      {
        alias: "q10",
        qtext: getTranslation("q10"),
        type: "numeric",
        placeholder: getTranslation("q10placeholder"),
        nextq: "q11",
      },
      {
        alias: "q11",
        qtext: getTranslation("q11"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q12",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q12",
          },
        ],
      },
      {
        alias: "q12",
        qtext: getTranslation("q12"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q13",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q13",
          },
        ],
      },
      {
        alias: "q13",
        qtext: getTranslation("q13"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q14",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q14",
          },
        ],
      },
      {
        alias: "q14",
        qtext: getTranslation("q14"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q15",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q19",
          },
        ],
      },
      {
        alias: "q15",
        qtext: getTranslation("q15"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q16",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q17",
          },
        ],
      },
      {
        alias: "q16",
        qtext: getTranslation("q16"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q17",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q17",
          },
        ],
      },
      {
        alias: "q17",
        qtext: getTranslation("q17"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q17a1"),
            nextq: "q18",
          },
          {
            value: "a2",
            label: getTranslation("q17a2"),
            nextq: "q18",
          },
          {
            value: "a3",
            label: getTranslation("q17a3"),
            nextq: "q18",
          },
        ],
      },
      {
        alias: "q18",
        qtext: getTranslation("q18"),
        placeholder: getTranslation("q18placeholder"),
        type: "text",
        nextq: "q19",
      },
      {
        alias: "q19",
        qtext: getTranslation("q19"),
        image: "qr_instructions_diagram",
        type: "instruct",
        nextq: "q20",
      },
      {
        alias: "q20",
        qtext: getTranslation("q20"),
        image: "qr_instructions_diagram_top",
        type: "instruct",
        nextq: "q21",
      },
      {
        alias: "q21",
        qtext: getTranslation("q21"),
        image: "null",
        type: "photo",
        /* type: "instruct", */
        nextq: "q22",
      },
      {
        alias: "q22",
        qtext: getTranslation("q22"),
        image: "qr_instructions_diagram_bottom",
        type: "instruct",
        nextq: "q23",
      },
      {
        alias: "q23",
        qtext: getTranslation("q23"),
        image: "null",
        type: "photo",
        /* type: "instruct", */

        nextq: "q24",
      },
      {
        alias: "q24",
        qtext: getTranslation("q24"),
        image: "railing_diagram",
        type: "instruct",
        nextq: "q25",
      },
      {
        alias: "q25",
        qtext: getTranslation("q25"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q26",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q32",
          },
        ],
      },
      {
        alias: "q26",
        qtext: getTranslation("q26"),
        image: "qr_instructions_diagram_rail",
        type: "instruct",
        nextq: "q27",
      },
      {
        alias: "q27",
        qtext: getTranslation("q27"),
        image: "null",
        type: "photo",
        /* type: "instruct",
         */
        nextq: "q28",
      },
      {
        alias: "q28",
        qtext: getTranslation("q28"),
        image: "none",
        type: "instruct",
        nextq: "q29",
      },
      {
        alias: "q29",
        qtext: getTranslation("q29"),
        image: "null",
        type: "photo",
        /* type: "instruct", */
        nextq: "q30",
      },
      {
        alias: "q30",
        qtext: getTranslation("q30"),
        type: "imageOption",
        answers: [
          {
            value: "a1",
            label: "A",
            nextq: "q31",
            image: "bread",
          },
          {
            value: "a2",
            label: "B",
            nextq: "q31",
            image: "circle",
          },
          {
            value: "a3",
            label: "C",
            nextq: "q31",
            image: "square",
          },
          {
            value: "a4",
            label: "D",
            nextq: "q31",
            image: "tall",
          },
          {
            value: "a5",
            label: "E",
            nextq: "q31",
            image: "tee",
          },
        ],
      },
      {
        alias: "q31",
        qtext: getTranslation("q31"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q31a1"),
            nextq: "q32",
            image: "null",
          },
          {
            value: "a2",
            label: getTranslation("q31a2"),
            nextq: "q32",
            image: "null",
          },
          {
            value: "a3",
            label: getTranslation("q31a3"),
            nextq: "q32",
            image: "null",
          },
          {
            value: "a4",
            label: getTranslation("q31a4"),
            nextq: "q32",
            image: "null",
          },
          {
            value: "a5",
            label: getTranslation("q31a5"),
            nextq: "q32",
            image: "null",
          },
        ],
      },
      {
        alias: "q32",
        qtext: getTranslation("q32"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("q32a1"),
            nextq: "q33",
            image: "null",
          },
          {
            value: "a2",
            label: getTranslation("q32a2"),
            nextq: "q33",
            image: "null",
          },
        ],
      },
      {
        alias: "q33",
        qtext: getTranslation("q33"),
        type: "opt-text",
        answers: [
          {
            type: "opt",
            value: "a1",
            label: getTranslation("q33a1"),
            nextq: "q34",
          },
          {
            type: "opt",
            value: "a2",
            label: getTranslation("q33a2"),
            nextq: "q34",
          },
          {
            type: "text",
            value: "a3",
            label: getTranslation("q33a3"),
            nextq: "q34",
          },
        ],
      },
      {
        alias: "q34",
        qtext: getTranslation("q34"),
        type: "opt-text",
        answers: [
          {
            type: "opt",
            value: "a1",
            label: getTranslation("q34a1"),
            nextq: "q35",
          },
          {
            type: "opt",
            value: "a2",
            label: getTranslation("q34a2"),
            nextq: "q35",
          },
          {
            type: "opt",
            value: "a3",
            label: getTranslation("q34a3"),
            nextq: "q35",
          },
          {
            type: "opt",
            value: "a4",
            label: getTranslation("q34a4"),
            nextq: "q35",
          },
          {
            type: "opt",
            value: "a5",
            label: getTranslation("q34a5"),
            nextq: "q35",
          },
          {
            type: "opt",
            value: "a6",
            label: getTranslation("q34a6"),
            nextq: "q35",
          },
          {
            type: "text",
            value: "a7",
            label: getTranslation("q34a7"),
            nextq: "q35",
          },
        ],
      },
      {
        alias: "q35",
        qtext: getTranslation("q35"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: "18-30",
            nextq: "q36",
          },
          {
            value: "a2",
            label: "31-40",
            nextq: "q36",
          },
          {
            value: "a3",
            label: "41-50",
            nextq: "q36",
          },
          {
            value: "a4",
            label: "51-60",
            nextq: "q36",
          },
          {
            value: "a5",
            label: "61-70",
            nextq: "q36",
          },
          {
            value: "a6",
            label: "71-80",
            nextq: "q36",
          },
          {
            value: "a7",
            label: "81-90",
            nextq: "q36",
          },
          {
            value: "a8",
            label: "91-100+",
            nextq: "q36",
          },
        ],
      },
      {
        alias: "q36",
        qtext: getTranslation("q36"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q37",
          },
          {
            value: "a2",
            label: getTranslation("q36a2"),
            nextq: "q37",
          },
          {
            value: "a3",
            label: getTranslation("q36a3"),
            nextq: "q37",
          },
          {
            value: "a4",
            label: getTranslation("q36a4"),
            nextq: "q37",
          },
        ],
      },
      {
        alias: "q37",
        qtext: getTranslation("q37"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "q38",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "q39",
          },
        ],
      },
      {
        alias: "q38",
        qtext: getTranslation("q38"),
        placeholder: getTranslation("q38placeholder"),
        type: "text",
        nextq: "q39",
      },
      {
        alias: "q39",
        qtext: getTranslation("q39"),
        type: "option",
        answers: [
          {
            value: "a1",
            label: getTranslation("yes"),
            nextq: "exit",
          },
          {
            value: "a2",
            label: getTranslation("no"),
            nextq: "exit",
          },
        ],
      },
    ],
  },
};

export default object;
