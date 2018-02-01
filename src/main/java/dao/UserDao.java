package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import entity.User;

public interface UserDao {
	/**
	 * 
	 * @param username
	 * @return
	 */
	public User findUserByUsername(String username);

	/**
	 * 
	 * @param user1
	 */
	public void addUser(User user1);

	/**
	 * 
	 * @param map
	 * @return
	 */
	public List<User> queryPagerList(Map <String,Object> map);

	/**
	 * 
	 * @param user
	 * @return
	 */
	public Integer getTotal(User user);
	
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
	public void updateUser(User user);

	/**
	 * 
	 * @param user
	 */
	public void deleteUser(User user);
}
