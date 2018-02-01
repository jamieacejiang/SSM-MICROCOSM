package entity;

import java.io.Serializable;

public class User implements Serializable{
	//id
	private String id;
	//用户名
	private String username;
	//密码
	private String password;
	//使用状态
	private String sts;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSts() {
		return sts;
	}
	public void setSts(String sts) {
		this.sts = sts;
	}
	@Override
	public String toString() {
		return "id=" + id + ", username=" + username + ", password="
				+ password + ", sts=" + sts;
	}
	
}
