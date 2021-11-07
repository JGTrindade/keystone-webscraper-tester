import Fetcher from "./Fetcher.js"

export default class HTMLFetcher extends Fetcher {

  async getFile(file) {
    const response = await fetch(file)
    const data = await response.text()
    let parser = new DOMParser()
    let HTMLFile = parser.parseFromString(data, 'text/html');
    return HTMLFile
  }

}