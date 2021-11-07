import Fetcher from "./Fetcher.js"

export default class XMLFetcher extends Fetcher {

  async getFile(file) {
    const response = await fetch(file)
    const data = await response.text()
    let parser = new DOMParser()
    let XMLFile = parser.parseFromString(data, 'application/xml')
    return XMLFile
  }

}
