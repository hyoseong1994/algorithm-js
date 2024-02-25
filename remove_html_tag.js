const fs = require("fs");
const path = require("path");

function modifyAllTextFiles(directoryPath, startTag, endTag) {
  // 디렉토리 내 모든 파일을 가져옴
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // 각 파일에 대해 수정 작업 수행
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      // 파일인지 확인
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isFile()) {
          // 파일이면 내용을 수정
          keepContentBetweenTags(filePath, startTag, endTag);
        }
      });
    });
  });
}
function keepContentBetweenTags(filePath, startTag, endTag) {
  // 파일을 읽어서 내용을 가져옴
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // 특정 태그 사이의 내용을 찾아서 남기고 나머지 내용은 제거
    const startIndex = data.indexOf(startTag);
    const endIndex = data.indexOf(endTag, startIndex + startTag.length);

    if (startIndex !== -1 && endIndex !== -1) {
      const contentBetweenTags = data.slice(
        startIndex + startTag.length,
        endIndex
      );

      // 찾은 내용만 파일에 쓰기
      fs.writeFile(filePath, contentBetweenTags, "utf8", (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(
          `파일 "${filePath}"에서 "${startTag}"와 "${endTag}" 사이의 내용만 남겼습니다.`
        );
      });
    } else {
      console.log(
        `파일 "${filePath}"에서 "${startTag}"와 "${endTag}"를 찾을 수 없습니다.`
      );
    }
  });
}

// 사용 예제
const directoryPath = "./10_dynamic"; // 수정해야 할 디렉토리 경로
const startTag = "<script>";
const endTag = "</script>";

modifyAllTextFiles(directoryPath, startTag, endTag);
