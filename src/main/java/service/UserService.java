package service;

import java.util.List;

import entity.MessageResult;
import entity.Role;
import entity.User;

public interface UserService {
	/**
	 * 
	 * @param user
	 * @return
	 */
	public MessageResult checkLogin(User user);
	/**
	 * 
	 * @param user
	 * @return
	 */
	public MessageResult checkRegister(User user);
	/**
	 * 查询用户列表信息
	 * @param username
	 * @param password
	 * @param limit
	 * @param offset
	 * @return
	 */
	public List<User> queryPagerList(String username, String password,int limit, int offset);
	/**
	 * 查询用户列表信息总条数
	 * @param username
	 * @param password
	 * @return
	 */
	public Integer getTotal(String username, String password);
	/**
	 * 
	 * @param user
	 * @return
	 */
	public User queryBean(User user);
	/**
	 * 
	 * @param user
	 * @return
	 */
	public MessageResult updateUser(User user);
	/**
	 * 
	 * @param user
	 * @return
	 */
	public MessageResult deleteUser(User user);

	/**
	 * 关联查询用户角色列表信息
	 * @param username
	 * @param role_id
	 * @param limit
	 * @param offset
	 * @return
	 */
	List<User> queryUserRoleList(String username, String role_id, int limit, int offset);

	/**
	 * 关联查询用户角色列表信息总条数
	 * @param username
	 * @param role_id
	 * @return
	 */
	Integer getUserRoleTotal(String username, String role_id);
}
