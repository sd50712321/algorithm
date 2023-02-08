const template =
  "$SiteName 이 사이트는 $SiteName이고, $UserName은 해당 $SiteName를 사용중인 $UserName입니다";

const replacePlaceholder = (str, placeholder, newValue) => {
  const re = new RegExp(placeholder, "g");
  const result = str.replace(re, newValue);
  return result;
};

const replaceAndReturn = (str, username, sitename) => {
  return replacePlaceholder(
    replacePlaceholder(str, "\\$UserName", username),
    "\\$SiteName",
    sitename
  );
};

function main() {
  console.log(replaceAndReturn(template, "이상민", "https://www.naver.com"));
}

main();
