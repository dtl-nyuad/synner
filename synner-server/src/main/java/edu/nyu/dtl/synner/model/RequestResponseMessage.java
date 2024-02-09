package edu.nyu.dtl.synner.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class RequestResponseMessage {

    @JsonProperty
    public String status; // "no" or "ok" //TODO to enum

    @JsonProperty
    public String message;

    public RequestResponseMessage() {

    }

    public RequestResponseMessage(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
