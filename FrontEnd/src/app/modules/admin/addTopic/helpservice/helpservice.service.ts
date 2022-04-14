import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpserviceService {
  url = 'http://localhost:8080/help-centre/topics/'

  constructor(private http: HttpClient) { }

  servicdata()
  {
    return this.http.get(this.url);
  }

  saveTopic(data)
  {
    return this.http.post(this.url, data);
  }

  updateTopic(data, topicID)
  {
    console.log("Updating", data);
    const updateURL = 'http://localhost:8080/help-centre/topics/' + topicID;
    return this.http.put(updateURL, data );
  }
}
