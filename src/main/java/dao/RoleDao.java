package dao;

import entity.Role;
import entity.User;

import java.util.List;
import java.util.Map;

public interface RoleDao {
    /**
     * 查询角色表列表
     *
     * @return 返回查询的角色表列表
     */
    public List<Role> getRoleList();

    /**
     * 查询结果列表
     * @param map
     * @return
     */
    public List<Role> query2TablesPagerList(Map<String, Object> map);

    /**
     * 查询总查询列表条数
     * @param user
     * @return
     */
    public Integer getTotal(User user);

}
