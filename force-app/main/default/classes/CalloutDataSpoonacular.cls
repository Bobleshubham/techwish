public with sharing class CalloutDataSpoonacular {
    @auraEnabled(cacheable=true)
  public static String getDogPicture(){
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('');
        req.setMethod('GET');
        HttpResponse resp = http.send(req);
        return resp.getBody();
   }
}
