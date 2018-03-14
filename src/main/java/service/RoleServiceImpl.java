package service;

import dao.RoleDao;
import entity.Role;
import entity.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import util.SIMSUtil;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service//扫描Service组件
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;//注入

    public List<Role> getRoleList() {
        List<Role> resultList = roleDao.getRoleList();
        return resultList;
    }
}
