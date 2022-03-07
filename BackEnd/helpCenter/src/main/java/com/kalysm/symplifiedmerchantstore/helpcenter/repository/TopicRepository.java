package com.kalysm.symplifiedmerchantstore.helpcenter.repository;

import com.kalysm.symplifiedmerchantstore.helpcenter.model.Topic;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author hasan
 */
public interface TopicRepository extends JpaRepository<Topic, String> {
    List<Topic> findByTitle(String title);
    List<Topic> findByTopicLevel(String topicLevel);
    List<Topic> findByContent(String content);
    List<Topic> findByParentId(String parentId);
}
