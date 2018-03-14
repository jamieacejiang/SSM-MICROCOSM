package service;

import entity.Role;
import entity.User;

import java.util.List;

public interface RoleService {
    /**
     * 查询角色表列表
     *
     * @return 返回查询的角色表列表
     */
    public List<Role> getRoleList();

}
