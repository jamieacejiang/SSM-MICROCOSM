package entity;

import java.io.Serializable;

public class User implements Serializable{
	//id(主键)
	private String id;
	//登录名
	private String username;
	//密码
	private String password;
	//状态(A,P)
	private String sts;
	//昵称
	private String nickname;
	//邮箱
	private String email;
	//个性签名
	private String person_sign;
	//注册时间
	private String registe_time;
	//最后一次登录ip地址
	private String login_ip;
	//生日
	private String birth;
	
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

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPerson_sign() {
		return person_sign;
	}

	public void setPerson_sign(String person_sign) {
		this.person_sign = person_sign;
	}

	public String getRegiste_time() {
		return registe_time;
	}

	public void setRegiste_time(String registe_time) {
		this.registe_time = registe_time;
	}

	public String getLogin_ip() {
		return login_ip;
	}

	public void setLogin_ip(String login_ip) {
		this.login_ip = login_ip;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	@Override
	public String toString() {
		return "id=" + id + ", username=" + username + ", password="
				+ password + ", sts=" + sts;
	}
	
}
