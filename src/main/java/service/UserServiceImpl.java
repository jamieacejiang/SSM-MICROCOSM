package service;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import util.SIMSUtil;
import dao.UserDao;
import entity.User;
import entity.MessageResult;
@Service//扫描Service组件
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;//注入
	
	public MessageResult checkLogin(User user){
		MessageResult result = new MessageResult();
		//User user1 = userDao.findUserByUsername(user.getUsername());
		User user1 = userDao.queryBean(user);
		if(user1 == null){
			result.setStatus(1);
			result.setMsg("账号不存在！");
			return result;
		}
		//与数据库密码比对
		if(!user1.getPassword().equals(user.getPassword())){
			result.setStatus(2);
			result.setMsg("密码错误！");
			return result;
		}
		result.setStatus(0);
		result.setMsg("登陆成功！");
		result.setData(user1);//返回用户
		return result;
	}

	@SuppressWarnings("null")
	public MessageResult checkRegister(User user) {
		MessageResult result = new MessageResult();
		String password = "";
		try {
			password = SIMSUtil.md5(user.getPassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		user.setPassword(password);
		User user1 = userDao.findUserByUsername(user.getUsername());
		if(user1 != null){
			result.setStatus(1);
			result.setMsg("该用户名已被注册！");
			return result;
		}
		userDao.addUser(user);
		result.setStatus(0);
		result.setMsg("注册成功！立即前往登录！");
		return result;
	}

	public List<User> queryPagerList(String username, String password, int limit, int offset) {
		//parametertype传多个参数,所以用map封装一下
		Map <String,Object> map =new HashMap<String,Object>();
		map.put("username", username);
		String md5_password = "";
		try {
			if(StringUtils.isNotBlank(password)){
				md5_password = SIMSUtil.md5(password);
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		map.put("password", md5_password);
		//由于在mysql中*有问题所以提前计算下
		if((offset!=-1)&&(limit!=-1)){
			offset = offset-limit+limit;
		}
		map.put("offset", offset);
		map.put("limit", limit);
		List<User> resultList = userDao.queryPagerList(map);
		return resultList;
	}

	public Integer getTotal(String username, String password) {
		User user = new User();
		user.setUsername(username);
		String md5_password = "";
		try {
			if(StringUtils.isNotBlank(password)){
				md5_password = SIMSUtil.md5(password);
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		user.setPassword(md5_password);
		Integer total = userDao.getTotal(user);
		return total;
	}

	public User queryBean(User user) {
		User u = userDao.queryBean(user);
		MessageResult result = new MessageResult();
		result.setData(u);
		return u;
	}

	public MessageResult updateUser(User user) {
		String md5_password = "";
		if(StringUtils.isNotBlank(user.getPassword())){
			try {
				md5_password = SIMSUtil.md5(user.getPassword());
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			}
			user.setPassword(md5_password);
		}
		userDao.updateUser(user);
		MessageResult result = new MessageResult();
		result.setStatus(0);
		result.setMsg("修改成功！");
		return result;
	}

	public MessageResult deleteUser(User user) {
		user.setSts("P");
		userDao.updateUser(user);
		MessageResult result = new MessageResult();
		result.setStatus(0);
		result.setMsg("删除成功！");
		return result;
	}

    public List<User> queryUserRoleList(String username, String roleId, int limit, int offset) {
        //parametertype传多个参数,所以用map封装一下
        Map <String,Object> map =new HashMap<String,Object>();
        map.put("username", username);
        map.put("roleId", roleId);
        //由于在mysql中*有问题所以提前计算下
        if((offset!=-1)&&(limit!=-1)){
            offset = offset-limit+limit;
        }
        map.put("offset", offset);
        map.put("limit", limit);
        List<User> resultList = userDao.queryUserRoleList(map);
        return resultList;
    }

    public Integer getUserRoleTotal(String username, String roleId) {
        //parametertype传多个参数,所以用map封装一下
        Map <String,Object> map =new HashMap<String,Object>();
        map.put("username", username);
        map.put("roleId", roleId);
        Integer total = userDao.getUserRoleTotal(map);
        return total;
    }

}
