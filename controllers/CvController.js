const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experiences = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));
  
  skills = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));



  languages = fs.readFileSync("data/language", { encoding: "utf-8" });
  languages = JSON.parse(String(languages));

  sk= [];

  edus = [];

  exper = [];

  lang = [] ;

  for (let key in educations) {
    edus.push(educations[key]);
  }

  for (let key in experiences) {
    exper.push(experiences[key]);
  }
  for (let key in skills) {
    sk.push(skills[key]);
  }
  for (let key in languages) {
    lang.push(languages[key]);
  }


  res.render("cv", { username: "Mehesum Rahman",myemail:"AverageMeh@gmail.com", address : "Prominent Housing", educations: edus, experiences: exper,skills: sk, languages: lang  });
};

module.exports = { getCV: getCV };
