import API from './axios.config'

// SERVICIO POST SCRAPER
export const scrapWeb = url => {
  return API.post('/api/v1/scrape-url/', url)
}

export const listScrapingUrl = () => {
  return API.get('/api/v1/scrape-url/')
};


// http://127.0.0.1:8000/api/v1/scrape-url/