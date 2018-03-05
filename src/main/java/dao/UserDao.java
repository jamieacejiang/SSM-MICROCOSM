package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import entity.User;

public interface UserDao {
	/**
	 * 通过username查询单个user实体
	 * @param username
	 * @return
	 */
	public User findUserByUsername(String username);

	/**
	 * 新增
	 * @param user1
	 */
	public void addUser(User user1);

	/**
	 * 查询结果列表
	 * @param map
	 * @return
	 */
	public List<User> queryPagerList(Map <String,Object> map);

	/**
	 * 获得查询总条数
	 * @param user
	 * @return
	 */
	public Integer getTotal(User user);
	
	/**
	 * 查询单个user实体
	 * @param user
	 * @return
	 */
	public User queryBean(User user);

	/**
	 * 更新
	 * @param user
	 * @return
	 */
	public void updateUser(User user);

	/**
	 * 删除
	 * @param user
	 */
	public void deleteUser(User user);

	/**
	 * 查询角色表列表
	 *
	 * @return 返回查询的角色表列表
	 */
    public List getRoleList();

	/**
	 * 关联查询用户角色列表信息
	 * @param map
	 * @return
	 */
	List<User> queryUserRoleList(Map<String, Object> map);

	/**
	 * 查询用户角色列表信息总条数
	 * @param map
	 * @return
	 */
	Integer getUserRoleTotal(Map<String, Object> map);
}
