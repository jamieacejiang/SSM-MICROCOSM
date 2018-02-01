package entity;

import java.io.Serializable;

public class MessageResult implements Serializable {
	private int status;			//状态
	private String msg;			//消息
	private Object data;		//数据
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
}
