
const path = require('node:path')
const fs = require('node:fs/promises')


const foo = async () => {

    await fs.mkdir(path.join(process.cwd(), 'baseFolder' ))

    const dirs = ['folder1','folder2','folder3','folder4','folder5']
    const files = ['file1.txt','file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    for (const dirName of dirs) {
        const dirPath = path.join('baseFolder', dirName)
        await fs.mkdir(dirPath)
        for (const fileName of files) {
            const filePath = path.join(dirPath, fileName)
            await fs.writeFile(filePath, '', 'utf-8')
        }
    }


    async function logPaths(folderPath) {
        const items = await fs.readdir(folderPath, { withFileTypes: true });

        for (const item of items) {
            const itemPath = path.join(folderPath, item.name);

            if (item.isDirectory()) {
                console.log(`Folder: ${itemPath}`);
                await logPaths(itemPath);
            } else if (item.isFile()) {
                console.log(`File: ${itemPath}`);
            }
        }
    }
    await logPaths( path.join(process.cwd(), 'baseFolder'));








}
void foo();