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
	private String personSign;
	//注册时间
	private String registeTime;
	//最后一次登录ip地址
	private String loginIp;
	//角色ID
	private String roleId;
	//生日
	private String birth;
	//角色
	private Role role;


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

	public String getPersonSign() {
		return personSign;
	}

	public void setPersonSign(String personSign) {
		this.personSign = personSign;
	}

	public String getRegisteTime() {
		return registeTime;
	}

	public void setRegisteTime(String registeTime) {
		this.registeTime = registeTime;
	}

	public String getLoginIp() {
		return loginIp;
	}

	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", sts='" + sts + '\'' +
                ", nickname='" + nickname + '\'' +
                ", email='" + email + '\'' +
                ", personSign='" + personSign + '\'' +
                ", registeTime='" + registeTime + '\'' +
                ", loginIp='" + loginIp + '\'' +
                ", roleId='" + roleId + '\'' +
                ", birth='" + birth + '\'' +
                ", role=" + role +
                '}';
    }
}
