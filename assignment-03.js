//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
 if (typeof currentPrice !== "number" || typeof discount !=="number" ||
 discount < 0 || discount > 100 ) {
    return "Invalid";
  }

  const finalPrice = currentPrice - (currentPrice * discount) / 100;
  return finalPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
if (typeof otp !== "string") {
   
    return "Invalid";

}

else if (otp.length !== 8) {

    return false;

}

else if (otp.startsWith("ph-")=== false) {

    return false;
}

else{

    return true;
}

}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
}
else if (typeof omr.right !== "number" ||typeof omr.wrong !== "number" ||
typeof omr.skip !== "number") {
    return "Invalid";
}
else if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
}
else {
    const score = (omr.right * 1) - (omr.wrong * 0.5);
    return Math.round(score);
}
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
if (!Array.isArray(array)) {
    return "Invalid";
}

  let ha = 0;
  let na = 0;

for (let vote of array) {
    if (vote === "ha") {
      ha++;
    }
    else if (vote === "na") {
      na++;
    }
}

if (ha > na) {
    return true;
}
else if (ha === na) {
    return "equal";
}
else {
    return false;
}

}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
if (typeof str !== "string") {
    return "Invalid";
}
else if (str.trim().length === 0) {
    return "Invalid";
}
else {
    let words = str.split(" ");

    let longest = "";
    let token = 0;

    for (let i = 0; i < words.length; i++) {

      if (words[i] !== "") {

        if (words[i].length > longest.length) {
          longest = words[i];
        }

        token = token + words[i].length;
      }
    }

    return {
      longwords: longest,
      token: token
    };
}

}




 