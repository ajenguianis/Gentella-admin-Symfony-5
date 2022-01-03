<?php


namespace App\Services;

use App\Repository\Interfaces\UserRepositoryInterface;
use App\Services\TransactionalService;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class StatisticService
 * @package AppBundle\Services
 */
class UserService extends TransactionalService
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @return UserRepositoryInterface
     */
    public function getRepository()
    {
        return $this->userRepository;
    }
}