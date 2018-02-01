package service;

import java.util.List;

import entity.MessageResult;
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
	 * 
	 * @param username
	 * @param password
	 * @param limit
	 * @param offset
	 * @return
	 */
	public List<User> queryPagerList(String username, String password,int limit, int offset);
	/**
	 * 
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
}
