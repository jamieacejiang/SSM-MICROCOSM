package service;

import entity.MessageResult;

public interface StatusService {
	public MessageResult querySchoolStatusList(String stuNumber,String name,String college);
}
