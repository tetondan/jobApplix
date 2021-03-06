'use strict'

const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  applicationGroup: Number,
  appliedDate: {type: Date, default: Date.now },
  firstName: String,
  lastName: String,
  middleName: String,
  phone: String,
  email: String,
  city: String,
  zip: String,
  position: String,
  backgroundCheck: Boolean,
  location: String,
  availability: {
    firstMon: Boolean,
    secondMon: Boolean,
    thirdMon: Boolean,
    firstTues: Boolean,
    secondTues: Boolean,
    thirdTues: Boolean,
    firstWed: Boolean,
    secondWed: Boolean,
    thirdWed: Boolean,
    firstThurs: Boolean,
    secondThurs: Boolean,
    thirdThurs: Boolean,
    firstFri: Boolean,
    secondFri: Boolean,
    thirdFri: Boolean,
    firstSat: Boolean,
    secondSat: Boolean,
    thirdSat: Boolean,
    firstSun: Boolean,
    secondSun: Boolean,
    thirdSun: Boolean,
  },
  fired: Boolean,
  firedExplanation: String,
  fullOrPartime: String,
  drugTest: Boolean,
  crimes: Boolean,
  crimesExplanation: String,
  workReferences: [],
  personalReferences: [],
  education: {
    highschool: {
      schoolName: String,
      location: String,
      yearsCompleted: String,
      fieldOfStudy: String,
      degree: String
    },
    college: {
      schoolName: String,
      location: String,
      yearsCompleted: String,
      fieldOfStudy: String,
      degree: String
    },
    tradeSchool: {
      schoolName: String,
      location: String,
      yearsCompleted: String,
      fieldOfStudy: String,
      degree: String
    }
  },
  physicalLimitation: Boolean,
  authWorkInUS: Boolean,
  validDriversLicense: Boolean,
  validDriversLicenseNumber: String,
  overFourteen: Boolean,
  overSixteen: Boolean,
  overEighteen: Boolean,
  overTwentyone: Boolean,
  overtime: Boolean,
  permanent: Boolean,
  otherLanguages: Boolean,
  whichLanguages: String,
  adequateTrans: Boolean,
  specializedSkills: Boolean,
  specializedSkillsList: String,
  computerRepair: Boolean,
  computerRepairList: String,
  softwareExperience: Boolean,
  softwareExperienceList: String,
  proffesionalCerts: String,
  typingSpeed: String, 
  veteran: Boolean,
  militaryDatesServed: String,
  militaryTraining: String,
  dateAvailableToBeginWork: String,
  dateAvailableToEndWork: String,
  otherComments: String,
  state: String,
  custom1: String,
  custom2: String,
  businessId: String,
  businessComments: Array,
  anyPosition: Boolean,
  referalSource: String,
  referalComment: String,
  appliedBefore: Boolean,
  appliedBeforeWhen: String,
  everEmployed: Boolean,
  everEmployedWhen: String,
  relativesEmployed: Boolean,
  relativesEmployedWho: String,
  currentlyEmployed: Boolean,
  contactCurrentEmployer: Boolean,
  contactCurrentEmployerReason: String,
  specialInterests: String
}, { timestamps: true });


const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
