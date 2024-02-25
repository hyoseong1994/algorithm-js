const fs = require("fs");
const path = require("path");

function renameFilesInDirectory(directoryPath, baseName) {
  // 디렉토리 내 모든 파일을 가져옴
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // 각 파일에 대해 이름 변경 작업 수행
    files.forEach((file, index) => {
      const number = file.split(".")[0].padStart(2, 0);
      const oldFilePath = path.join(directoryPath, file);
      const newFileName = `${baseName}${number}.js`;
      const newFilePath = path.join(directoryPath, newFileName);

      // 파일인지 확인
      fs.stat(oldFilePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isFile()) {
          // 파일이면 이름 변경
          fs.rename(oldFilePath, newFilePath, (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log(
              `파일 "${oldFilePath}"을 "${newFilePath}"로 성공적으로 이름을 변경했습니다.`
            );
          });
        }
      });
    });
  });
}

// 사용 예제
const directoryPath = "./10_dynamic"; // 파일 이름을 변경할 디렉토리 경로
const baseName = "section"; // 새로운 파일 이름의 기본 부분

renameFilesInDirectory(directoryPath, baseName);
